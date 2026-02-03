import { test, expect } from '@playwright/test';

test.describe('Smoke Test - Repaired Word Game', () => {
  test('should pass all tests for the word game exercise (repaired split syntax)', async ({ page }) => {
    test.setTimeout(120000);

    // 1. Register / Login
    await page.goto('http://localhost:5173/login');
    
    // Try to register (safest way to ensure user exists in a clean dev environment)
    await page.click('text=No tengo cuenta, quiero registrarme');
    await page.fill('#email', 'smoke-test@e.unavarra.es');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');

    // If registration fails because user exists, it might show an error, but let's assume it works or we can login
    try {
        await expect(page).toHaveURL('http://localhost:5173/', { timeout: 10000 });
    } catch (e) {
        // Fallback: Try login
        await page.goto('http://localhost:5173/login');
        await page.fill('#email', 'smoke-test@e.unavarra.es');
        await page.fill('#password', 'password123');
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL('http://localhost:5173/', { timeout: 10000 });
    }

    // 2. Navigate to Part 10 Section 1
    await page.goto('http://localhost:5173/course/mooc/part10-1');

    // 3. Find the Word Game exercise
    // It's the 4th exercise block. 
    // We'll wait for ANY exercise to appear first.
    await page.waitForSelector('.monaco-editor', { timeout: 20000 });
    
    // Locating by text in any of the 3 supported languages
    const exerciseHeading = page.locator('h3').filter({ hasText: /Word game|Juego de palabras|Hitz jokoa/ });
    await expect(exerciseHeading).toBeVisible({ timeout: 15000 });

    const exerciseCard = page.locator('div.bg-white, div.rounded-2xl').filter({ has: exerciseHeading });
    
    // 4. Inject Solution
    // Note: Python solution with double backslashes for multi-line
    const solution = `import random

class WordGame():
    def __init__(self, rounds: int):
        self.wins1 = 0
        self.wins2 = 0
        self.rounds = rounds

    def round_winner(self, player1_word: str, player2_word: str):
        return random.randint(1, 2)

    def play(self):
        print("Word game:")
        for i in range(1, self.rounds+1):
            print(f"round {i}")
            answer1 = input("player1: ")
            answer2 = input("player2: ")

            if self.round_winner(answer1, answer2) == 1:
                self.wins1 += 1
                print("player 1 won")
            elif self.round_winner(answer1, answer2) == 2:
                self.wins2 += 1
                print("player 2 won")

        print("game over, wins:")
        print(f"player 1: {self.wins1}")
        print(f"player 2: {self.wins2}")

class LongestWord(WordGame):
    def round_winner(self, player1_word: str, player2_word: str):
        if len(player1_word) > len(player2_word):
            return 1
        elif len(player1_word) < len(player2_word):
            return 2
        return 0

class MostVowels(WordGame):
    def round_winner(self, player1_word: str, player2_word: str):
        v1 = sum(1 for c in player1_word.lower() if c in 'aeiou')
        v2 = sum(1 for c in player2_word.lower() if c in 'aeiou')
        if v1 > v2: return 1
        if v2 > v1: return 2
        return 0

class RockPaperScissors(WordGame):
    def round_winner(self, p1: str, p2: str):
        choices = ["rock", "paper", "scissors"]
        if p1 not in choices and p2 not in choices: return 0
        if p1 not in choices: return 2
        if p2 not in choices: return 1
        
        if p1 == p2: return 0
        if (p1 == "rock" and p2 == "scissors") or \
           (p1 == "paper" and p2 == "rock") or \
           (p1 == "scissors" and p2 == "paper"):
            return 1
        return 2
`;

    const editor = exerciseCard.locator('.monaco-editor');
    await editor.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(solution);

    // 5. Test
    const testButton = exerciseCard.getByRole('button', { name: /Test/i });
    await testButton.click();

    // 6. Verify Results
    // We expect the results container to eventually show success
    const resultsContainer = exerciseCard.locator('.mt-4');
    await expect(resultsContainer).toContainText(/All tests passed|Todos los tests pasados|Test guztiak gaindituta/i, { timeout: 60000 });
  });
});
