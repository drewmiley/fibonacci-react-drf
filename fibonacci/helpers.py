def fibonacci_sequence(x, y, length):
    a = x
    b = y
    c = int(length/2)
    results = [a, b]
    for i in range(1, c):
        a = a + b
        b = b + a
        results.append(a)
        results.append(b)
    if length % 2 != 0:
        a = a + b
        results.append(a)
    return results
