#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Execiution time tests.

@author: ugaitz.amozarrain
"""

import random
import time
import linked_list
from collections import deque  # We will use a deque as a double linked list


def create_random_list(size: int = 1000000):
    lst = []
    for i in range(size):
        lst.append(random.random())
    return lst


"""
This function is too quick, and the value varies too much.
We cannot trust the time needed to append one element.
"""


def test_list_tail_1(value):
    start = time.perf_counter_ns()
    test = []
    test.append(value)
    end = time.perf_counter_ns()
    return end - start

# %% Working with Python lists


def test_list_head(lst):
    start = time.perf_counter_ns()
    test = []
    for element in lst:
        test.insert(0, element)
    end = time.perf_counter_ns()
    return end - start


def test_list_tail(lst):
    start = time.perf_counter_ns()
    test = []
    for element in lst:
        test.append(element)
    end = time.perf_counter_ns()
    return end - start


def test_list_middle(lst):
    start = time.perf_counter_ns()
    test = []
    for index, element in enumerate(lst):
        test.insert(index//2, element)
    end = time.perf_counter_ns()
    return end - start

# %% Working with Linked Lists


def test_linked_head(lst):
    start = time.perf_counter_ns()
    test = linked_list.LinkedList()
    for element in lst:
        test.add_head(element)
    end = time.perf_counter_ns()
    return end - start


def test_linked_tail(lst):
    start = time.perf_counter_ns()
    test = linked_list.LinkedList()
    for element in lst:
        test.add_tail(element)
    end = time.perf_counter_ns()
    return end - start


def test_linked_middle(lst):
    start = time.perf_counter_ns()
    test = linked_list.LinkedList()
    for index, element in enumerate(lst):
        test.add_after(index//2, element)
    end = time.perf_counter_ns()
    return end - start

# %% Working with modified Linked Lists


def test_linked_v2_head(lst):
    start = time.perf_counter_ns()
    test = linked_list.HeadTailLinkedList()
    for element in lst:
        test.add_head(element)
    end = time.perf_counter_ns()
    return end - start


def test_linked_v2_tail(lst):
    start = time.perf_counter_ns()
    test = linked_list.HeadTailLinkedList()
    for element in lst:
        test.add_tail(element)
    end = time.perf_counter_ns()
    return end - start


def test_linked_v2_middle(lst):
    start = time.perf_counter_ns()
    test = linked_list.HeadTailLinkedList()
    for index, element in enumerate(lst):
        test.add_after(index//2, element)
    end = time.perf_counter_ns()
    return end - start


# %% Working with Python's implementation of a deque

def test_deque_head(lst):
    start = time.perf_counter_ns()
    test = deque()
    for element in lst:
        test.appendleft(element)
    end = time.perf_counter_ns()
    return end - start


def test_deque_tail(lst):
    start = time.perf_counter_ns()
    test = deque()
    for element in lst:
        test.append(element)
    end = time.perf_counter_ns()
    return end - start


def test_deque_middle(lst):
    start = time.perf_counter_ns()
    test = deque()
    for index, element in enumerate(lst):
        test.insert(index//2, element)
    end = time.perf_counter_ns()
    return end - start


# %% Testing functions

def test_times(n):
    # We will use this list for the tests
    lst = create_random_list(n)
    print("Testing list head")
    time_lst_head = test_list_head(lst) * 1e-9
    print("Testing list tail")
    time_lst_tail = test_list_tail(lst) * 1e-9
    print("Testing list middle")
    time_lst_middle = test_list_middle(lst) * 1e-9
    print("Testing linked list head")
    time_linked_head = test_linked_head(lst) * 1e-9
    print("Testing linked list tail")
    time_linked_tail = test_linked_tail(lst) * 1e-9
    print("Testing linked list middle")
    time_linked_middle = test_linked_middle(lst) * 1e-9
    print("Testing linked V2 list head")
    time_linked_v2_head = test_linked_v2_head(lst) * 1e-9
    print("Testing linked  V2 list tail")
    time_linked_v2_tail = test_linked_v2_tail(lst) * 1e-9
    print("Testing linked  V2 list middle")
    time_linked_v2_middle = test_linked_v2_middle(lst) * 1e-9
    print("Testing deque head")
    time_deque_head = test_deque_head(lst) * 1e-9
    print("Testing deque tail")
    time_deque_tail = test_deque_tail(lst) * 1e-9
    print("Testing deque middle")
    time_deque_middle = test_deque_middle(lst) * 1e-9
    print("\n")
    print("              ┌──────────┬──────────┬────────────┐")
    print("              │ Add head │ Add tail │ Add middle │")
    print("┌─────────────┼──────────┼──────────┼────────────┤")
    print(f"│       Lists │{time_lst_head:>8.5f}s │{
          time_lst_tail:>8.5f}s │{time_lst_middle:>10.5f}s │")
    print("├─────────────┼──────────┼──────────┼────────────┤")
    print(f"│      Linked │{time_linked_head:>8.5f}s │{
          time_linked_tail:>8.5f}s │{time_linked_middle:>10.5f}s │")
    print("├─────────────┼──────────┼──────────┼────────────┤")
    print(f"│   Linked V2 │{time_linked_v2_head:>8.5f}s │{
          time_linked_v2_tail:>8.5f}s │{time_linked_v2_middle:>10.5f}s │")
    print("├─────────────┼──────────┼──────────┼────────────┤")
    print(f"│       Deque │{time_deque_head:>8.5f}s │{
          time_deque_tail:>8.5f}s │{time_deque_middle:>10.5f}s │")
    print("└─────────────┴──────────┴──────────┴────────────┘")


if __name__ == "__main__":
    n = 10000
    test_times(n)
