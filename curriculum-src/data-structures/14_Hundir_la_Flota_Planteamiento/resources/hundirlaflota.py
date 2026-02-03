# -*- coding: utf-8 -*-
# Author: Xabier Olaz

# === Importaciones ===
import random # Para colocar barcos aleatoriamente y para los turnos del PC

# === Constantes Globales ===
# --- Configuración base del juego (Ejercicios 1, 2, 3) ---
BOARD_SIZE = 8          # Tamaño del tablero (8x8)
SHIP_SYMBOL = 'S'       # Símbolo interno para un barco
EMPTY_SYMBOL = '.'      # Símbolo interno para casilla vacía
MISS_SYMBOL = 'O'       # Símbolo para disparo fallido (Agua)
HIT_SYMBOL = 'X'        # Símbolo para disparo acertado (Tocado/Hundido)
UNKNOWN_SYMBOL = '?'    # Símbolo para casilla no bombardeada (vista del jugador)

# === Funciones Auxiliares ===

def clear_console():
  """Intenta limpiar la consola imprimiendo líneas nuevas."""
  print("\n" * 2) # Una forma simple y compatible de espaciar la salida

def create_board(size=BOARD_SIZE):
  """Crea un tablero vacío (lista de listas) del tamaño especificado."""
  # --- Requerido implícitamente por Ejercicio 1, 2, 3 ---
  return [[EMPTY_SYMBOL for _ in range(size)] for _ in range(size)]

def print_board(board, hide_ships=True, title="Tablero"):
  """
  Imprime el tablero en la consola.
  Si hide_ships es True, los barcos ('S') se muestran como UNKNOWN_SYMBOL ('?').
  Las casillas vacías ('.') también se muestran como UNKNOWN_SYMBOL.
  Los aciertos ('X') y fallos ('O') se muestran tal cual.
  --- Requerido por Ejercicio 1, 2, 3 ---
  """
  print(f"--- {title} ---")
  # Imprime cabecera (letras A, B, C...)
  header = "  " + " ".join([chr(ord('A') + i) for i in range(len(board[0]))])
  print(header)
  # Imprime filas con números y contenido
  for r in range(len(board)):
    row_str = f"{r + 1:<2}" # Número de fila (1-based)
    for c in range(len(board[r])):
      cell = board[r][c]
      if hide_ships and cell == SHIP_SYMBOL:
        row_str += UNKNOWN_SYMBOL + " "
      elif cell == EMPTY_SYMBOL:
         row_str += UNKNOWN_SYMBOL + " "
      else: # Muestra 'X' o 'O'
        row_str += cell + " "
    print(row_str)
  print("-" * (len(header) + 2))

def print_final_board(board_ships, board_guesses, title="Tablero Final"):
    """
    Imprime el tablero al final del modo 1 jugador, revelando barcos no encontrados ('!').
    --- Requerido por Ejercicio 1 ---
    """
    print(f"--- {title} ---")
    header = "  " + " ".join([chr(ord('A') + i) for i in range(len(board_ships[0]))])
    print(header)
    for r in range(len(board_ships)):
        row_str = f"{r + 1:<2}"
        for c in range(len(board_ships[r])):
            if board_guesses[r][c] == HIT_SYMBOL: # Acierto del jugador
                row_str += HIT_SYMBOL + " "
            elif board_guesses[r][c] == MISS_SYMBOL: # Fallo del jugador
                row_str += MISS_SYMBOL + " "
            elif board_ships[r][c] == SHIP_SYMBOL: # Barco no descubierto
                row_str += "! "
            else: # Casilla vacía no disparada
                row_str += UNKNOWN_SYMBOL + " "
        print(row_str)
    print("-" * (len(header) + 2))

def place_ships_randomly(board, num_ships):
  """
  Coloca N barcos de 1 casilla aleatoriamente en el tablero, sin solaparlos.
  --- Requerido por Ejercicio 1 y 3 ---
  """
  size = len(board)
  ships_placed = 0
  while ships_placed < num_ships:
    row = random.randint(0, size - 1)
    col = random.randint(0, size - 1)
    if board[row][col] == EMPTY_SYMBOL:
      board[row][col] = SHIP_SYMBOL
      ships_placed += 1

def get_player_guess(size=BOARD_SIZE):
  """
  Solicita al jugador coordenadas en formato LetraNumero (ej: 'A1') y las valida.
  Devuelve una tupla (fila, columna) como índices (0-based) o None si es inválido.
  --- Requerido por Ejercicio 1, 2, 3 ---
  """
  # Mejora posible (comentada): Aceptar otros formatos como 1A, a1, etc., usando expresiones regulares o más lógica.
  while True:
    guess_str = input(f"Introduce la celda (ej: A1): ").strip().upper() # Pide entrada, limpia y mayúsculas

    # Validación simple para formato LetraNumero (ej: A1, C5, H8)
    if len(guess_str) >= 2 and guess_str[0].isalpha() and guess_str[1:].isdigit():
      col_char = guess_str[0] # Primer carácter es la letra
      row_str = guess_str[1:] # El resto es el número
      
      try:
        # Convierte letra a índice de columna (A=0, B=1...)
        col = ord(col_char) - ord('A')
        # Convierte número (string) a índice de fila (1=0, 2=1...)
        row = int(row_str) - 1

        # Comprueba si está dentro de los límites del tablero
        if 0 <= row < size and 0 <= col < size:
          return row, col # Coordenadas válidas
        else:
          print(f"Coordenadas fuera del tablero (Filas 1-{size}, Columnas A-{chr(ord('A') + size - 1)}).")
      except ValueError:
        # Error si la parte numérica no es un entero válido (ej: A1B)
        print("Formato de número de fila inválido.")
      except Exception:
         # Otro error inesperado
         print("Error desconocido en la entrada.")
         
    else: # Si no cumple el formato LetraNumero básico
      print(f"Formato inválido. Usa LetraNumero (ej: A1, B8).")

def place_ships_manually(board, num_ships, player_name):
    """
    Permite al jugador colocar sus N barcos manualmente.
    --- Requerido por Ejercicio 2 ---
    """
    size = len(board)
    ships_placed = 0
    print(f"\n--- Colocación manual para {player_name} ---")
    print_board(board, hide_ships=False, title=f"Tu tablero ({player_name})") # Muestra tablero propio

    while ships_placed < num_ships:
        print(f"Coloca el barco {ships_placed + 1}/{num_ships}")
        coords = get_player_guess(size) # Pide coordenadas
        if coords:
            row, col = coords
            if board[row][col] == EMPTY_SYMBOL: # Si la casilla está libre
                board[row][col] = SHIP_SYMBOL # Coloca barco
                ships_placed += 1
                clear_console()
                print(f"Barco {ships_placed} colocado en {chr(ord('A') + col)}{row + 1}.")
                print_board(board, hide_ships=False, title=f"Tu tablero ({player_name})") # Muestra actualizado
            else:
                print("Casilla ocupada. Elige otra.")
        else: # Si get_player_guess falló
            print("Entrada inválida.") # No debería pasar con el bucle interno de get_player_guess, pero por si acaso

    print(f"\n¡{player_name} ha terminado de colocar sus barcos!")
    input("Presiona Enter para continuar...")

def computer_guess(board_guesses, size=BOARD_SIZE):
    """
    Genera una coordenada aleatoria para el PC, evitando repetir disparos.
    Usa el tablero 'board_guesses' (que registra los intentos previos del PC) para saber dónde ya disparó.
    --- Requerido por Ejercicio 3 ---
    """
    while True:
        row = random.randint(0, size - 1)
        col = random.randint(0, size - 1)
        # Comprueba si la casilla NO ha sido marcada como MISS o HIT en el registro de disparos del PC
        if board_guesses[row][col] != MISS_SYMBOL and board_guesses[row][col] != HIT_SYMBOL:
            return row, col # Devuelve coordenadas no repetidas

# === Modos de Juego ===

# --- Ejercicio 1: Juego sencillo para un solo jugador (3 puntos) ---
def play_single_player():
  """Lógica del modo 1 Jugador vs PC (barcos aleatorios)."""
  print("\n--- Modo Un Jugador ---")
  # Configuración de dificultad
  try:
    num_ships = int(input(f"¿Cuántos barcos (1-{BOARD_SIZE*BOARD_SIZE}, por defecto 3)? ") or 3)
    if not (0 < num_ships <= BOARD_SIZE*BOARD_SIZE): num_ships = 3 # Valor por defecto si es inválido
  except ValueError:
    num_ships = 3 # Valor por defecto si no es número
  
  try:
    min_guesses = num_ships
    default_guesses = max(num_ships, 12)
    num_guesses = int(input(f"¿Cuántos intentos (mínimo {min_guesses}, por defecto {default_guesses})? ") or default_guesses)
    if num_guesses < min_guesses: num_guesses = min_guesses # Mínimo si es inválido
  except ValueError:
    num_guesses = default_guesses # Valor por defecto si no es número

  # Preparación
  board_ships = create_board() # Tablero real de barcos
  board_display = create_board() # Tablero que ve el jugador
  place_ships_randomly(board_ships, num_ships) # Coloca barcos PC

  remaining_guesses = num_guesses
  ships_found = 0

  # Bucle principal
  while remaining_guesses > 0 and ships_found < num_ships:
    clear_console()
    print(f"Intentos: {remaining_guesses} | Barcos restantes: {num_ships - ships_found}")
    print_board(board_display, hide_ships=True, title="Tu Radar")

    coords = get_player_guess() # Pide coordenadas al jugador
    if coords is None: continue # Si la entrada fue inválida, reintenta

    row, col = coords
    
    # Comprueba si ya disparó ahí
    if board_display[row][col] != EMPTY_SYMBOL and board_display[row][col] != UNKNOWN_SYMBOL:
        print("Ya disparaste ahí. Elige otra casilla.")
        input("Presiona Enter...")
        continue

    # Comprueba resultado
    if board_ships[row][col] == SHIP_SYMBOL:
      print("¡HUNDIDO!")
      board_display[row][col] = HIT_SYMBOL
      board_ships[row][col] = HIT_SYMBOL # Marca también en el original
      ships_found += 1
    else:
      print("¡AGUA!")
      board_display[row][col] = MISS_SYMBOL

    remaining_guesses -= 1
    if remaining_guesses > 0 and ships_found < num_ships:
        input("Presiona Enter para continuar...")

  # Fin del juego
  clear_console()
  if ships_found == num_ships:
    print("¡FELICIDADES! ¡Has ganado!")
    print_board(board_display, hide_ships=True, title="Resultado Final")
  else:
    print("¡HAS PERDIDO! Te quedaste sin intentos.")
    print("Los barcos que quedaban eran (!):")
    print_final_board(board_ships, board_display) # Muestra barcos restantes

  input("\nPresiona Enter para volver al menú...")


# --- Ejercicio 2: Extiende el juego para que 2 jugadores puedan jugar (2 puntos) ---
def play_two_players():
    """Lógica del modo 2 Jugadores (Humano vs Humano)."""
    print("\n--- Modo Dos Jugadores ---")
    # Configuración
    try:
        num_ships = int(input(f"¿Cuántos barcos por jugador (1-{BOARD_SIZE*BOARD_SIZE}, por defecto 3)? ") or 3)
        if not (0 < num_ships <= BOARD_SIZE*BOARD_SIZE): num_ships = 3
    except ValueError:
        num_ships = 3

    player1_name = input("Nombre Jugador 1: ") or "Jugador 1"
    player2_name = input("Nombre Jugador 2: ") or "Jugador 2"

    # Preparación tableros
    player1_ships = create_board() # Barcos J1
    player1_guesses = create_board() # Radar J1
    player2_ships = create_board() # Barcos J2
    player2_guesses = create_board() # Radar J2

    # Colocación manual (Obligatoria en esta versión simplificada)
    clear_console()
    place_ships_manually(player1_ships, num_ships, player1_name)
    clear_console()
    print(f"Turno de {player2_name} para colocar. {player1_name}, no mires.")
    input(f"Presiona Enter cuando {player2_name} esté listo...")
    place_ships_manually(player2_ships, num_ships, player2_name)

    # Bucle principal
    current_player = 1
    player1_hits = 0
    player2_hits = 0
    game_over = False

    while not game_over:
        clear_console()

        # Determina jugador activo y tableros correspondientes
        if current_player == 1:
            active_name, opponent_name = player1_name, player2_name
            guesses_board, opponent_ships = player1_guesses, player2_ships
            hits, opponent_hits = player1_hits, player2_hits
        else:
            active_name, opponent_name = player2_name, player1_name
            guesses_board, opponent_ships = player2_guesses, player1_ships
            hits, opponent_hits = player2_hits, player1_hits

        print(f"--- Turno de {active_name} ---")
        print(f"Aciertos sobre {opponent_name}: {hits}/{num_ships} | Aciertos de {opponent_name} sobre ti: {opponent_hits}/{num_ships}")
        print_board(guesses_board, hide_ships=True, title=f"Tu Radar (sobre {opponent_name})")

        coords = get_player_guess() # Pide coordenadas
        if coords is None: continue

        row, col = coords

        # Comprueba si ya disparó ahí
        if guesses_board[row][col] != EMPTY_SYMBOL and guesses_board[row][col] != UNKNOWN_SYMBOL:
            print("Ya disparaste ahí. Elige otra casilla.")
            input("Presiona Enter...")
            continue

        # Comprueba resultado
        if opponent_ships[row][col] == SHIP_SYMBOL:
            print(f"¡HUNDIDO! Has acertado un barco de {opponent_name}.")
            guesses_board[row][col] = HIT_SYMBOL
            opponent_ships[row][col] = HIT_SYMBOL # Marca también en el original
            if current_player == 1: player1_hits += 1
            else: player2_hits += 1
        else:
            print("¡AGUA!")
            guesses_board[row][col] = MISS_SYMBOL

        # Comprueba victoria
        if player1_hits == num_ships:
            game_over = True
            clear_console()
            print(f"¡¡¡ {player1_name} HA GANADO !!!")
            print_board(player1_guesses, hide_ships=True, title=f"Radar final de {player1_name}")
        elif player2_hits == num_ships:
            game_over = True
            clear_console()
            print(f"¡¡¡ {player2_name} HA GANADO !!!")
            print_board(player2_guesses, hide_ships=True, title=f"Radar final de {player2_name}")
        else:
            # Cambia de turno
            current_player = 2 if current_player == 1 else 1
            next_player_name = player1_name if current_player == 1 else player2_name
            print(f"\nTurno para {next_player_name}.")
            input("Presiona Enter para pasar el turno (¡que no mire el otro!)...")

    input("\nPresiona Enter para volver al menú...")


# --- Ejercicio 3: Jugar contra el ordenador (1 punto) ---
def play_vs_computer():
    """Lógica del modo Jugador vs Ordenador."""
    print("\n--- Modo Jugador vs Ordenador ---")
    # Configuración
    try:
        num_ships = int(input(f"¿Cuántos barcos por jugador (1-{BOARD_SIZE*BOARD_SIZE}, por defecto 3)? ") or 3)
        if not (0 < num_ships <= BOARD_SIZE*BOARD_SIZE): num_ships = 3
    except ValueError:
        num_ships = 3

    player_name = input("Tu nombre: ") or "Jugador"
    computer_name = "Ordenador"

    # Preparación tableros
    player_ships = create_board()    # Barcos del jugador
    player_guesses = create_board()  # Radar del jugador (sobre PC)
    computer_ships = create_board()  # Barcos del PC (oculto)
    computer_guesses_display = create_board() # Tablero para ver ataques del PC sobre jugador
    computer_internal_guesses = create_board() # Tablero para que PC no repita (no se muestra)

    # Colocación
    clear_console()
    place_ships_manually(player_ships, num_ships, player_name) # Jugador coloca manual
    clear_console()
    print("El Ordenador coloca sus barcos...")
    place_ships_randomly(computer_ships, num_ships) # PC coloca aleatorio
    print("¡Barcos del Ordenador colocados!")
    input("Presiona Enter para empezar...")

    # Bucle principal
    is_player_turn = True
    player_hits = 0
    computer_hits = 0
    game_over = False

    while not game_over:
        clear_console()

        if is_player_turn:
            # --- Turno Jugador ---
            print(f"--- Tu Turno ({player_name}) ---")
            print(f"Aciertos sobre {computer_name}: {player_hits}/{num_ships} | Aciertos del PC sobre ti: {computer_hits}/{num_ships}")
            print_board(player_guesses, hide_ships=True, title=f"Tu Radar (sobre {computer_name})")
            print_board(computer_guesses_display, hide_ships=True, title="Tu Tablero (Ataques recibidos)")

            coords = get_player_guess() # Pide coordenadas jugador
            if coords is None: continue

            row, col = coords

            # Comprueba si ya disparó ahí
            if player_guesses[row][col] != EMPTY_SYMBOL and player_guesses[row][col] != UNKNOWN_SYMBOL:
                print("Ya disparaste ahí.")
                input("Presiona Enter...")
                continue

            # Comprueba resultado
            if computer_ships[row][col] == SHIP_SYMBOL:
                print(f"¡HUNDIDO! Has acertado un barco del {computer_name}.")
                player_guesses[row][col] = HIT_SYMBOL
                computer_ships[row][col] = HIT_SYMBOL # Marca en original PC
                player_hits += 1
            else:
                print("¡AGUA!")
                player_guesses[row][col] = MISS_SYMBOL

            # Comprueba victoria jugador
            if player_hits == num_ships:
                game_over = True
                clear_console()
                print(f"¡¡¡ {player_name} HA GANADO !!!")
                print_board(player_guesses, hide_ships=True, title="Radar final")

        else:
            # --- Turno Ordenador ---
            print(f"--- Turno del {computer_name} ---")
            print("El Ordenador está disparando...")

            # Obtiene coordenadas del PC sin repetir
            row, col = computer_guess(computer_internal_guesses)
            # Marca el intento en el registro interno del PC para que no repita
            # (Marcamos con MISS o HIT después, esto es solo para la función computer_guess)
            # computer_internal_guesses[row][col] = '?' # O cualquier marca interna

            coord_str = f"{chr(ord('A') + col)}{row + 1}"
            print(f"El {computer_name} dispara a {coord_str}...")

            # Comprueba resultado en tablero del jugador
            if player_ships[row][col] == SHIP_SYMBOL:
                print(f"¡TOCADO! El {computer_name} acertó tu barco en {coord_str}.")
                computer_guesses_display[row][col] = HIT_SYMBOL # Marca en tablero visible
                player_ships[row][col] = HIT_SYMBOL # Marca en tablero real jugador
                computer_internal_guesses[row][col] = HIT_SYMBOL # Actualiza registro interno PC
                computer_hits += 1
            else:
                print(f"¡AGUA! El {computer_name} falló.")
                computer_guesses_display[row][col] = MISS_SYMBOL # Marca en tablero visible
                computer_internal_guesses[row][col] = MISS_SYMBOL # Actualiza registro interno PC


            # Comprueba victoria PC
            if computer_hits == num_ships:
                game_over = True
                clear_console()
                print(f"¡¡¡ HAS PERDIDO !!! El {computer_name} ha ganado.")
                print("\nTablero de ataques del Ordenador:")
                print_board(computer_guesses_display, hide_ships=True)
                print("\nTu tablero final:")
                print_final_board(player_ships, computer_guesses_display, title=f"Tus Barcos ({player_name})")


        # Cambia turno si no ha acabado
        if not game_over:
            is_player_turn = not is_player_turn # Cambia de jugador
            input("Presiona Enter para continuar...")

    input("\nPresiona Enter para volver al menú...")


# === Menú Principal ===
def main_menu():
  """Muestra el menú principal y lanza el modo de juego elegido."""
  while True:
    clear_console()
    print("=====================")
    print("   HUNDIR LA FLOTA   ")
    print("=====================")
    print("\nModos de juego:")
    print("1. Un Jugador")
    print("2. Dos Jugadores")
    print("3. Jugador vs Ordenador")
    print("4. Salir")

    choice = input(">> Elige (1-4): ")

    if choice == '1':
      play_single_player()
    elif choice == '2':
      play_two_players()
    elif choice == '3':
      play_vs_computer()
    elif choice == '4':
      print("¡Adiós!")
      break # Sale del bucle while y termina
    else:
      print("Opción no válida.")
      input("Presiona Enter...")

# === Punto de Entrada ===
if __name__ == "__main__":
  # Esto asegura que main_menu() solo se llama cuando ejecutas el script directamente
  main_menu()
