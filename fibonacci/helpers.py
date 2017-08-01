def fibonacci_sequence(x, y):
    a = x
    b = y
    results = [a, b]
    for i in range(1, 5):
        a = a + b
        b = b + a
        results.append(a)
        results.append(b)
    return results
