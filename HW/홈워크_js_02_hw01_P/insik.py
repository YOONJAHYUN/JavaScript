dy = [0, 1, 0, -1]
dx = [1, 0, -1, 0]


N, M, T = map(int, input().split())

arr_1 = [list(map(str, input())) for _ in range(N)]

arr_2 = [['O']*M for _ in range(N)]

arr_3 = [['O']*M for _ in range(N)]

coordinate = []

for i in range(N):
    for j in range(M):
        if arr_1[i][j] == 'O':
            coordinate.append([i, j])

while coordinate:
    n, m = coordinate.pop()
    arr_3[n][m] = '.'
    for k in range(4):
        ny, nx = n + dy[k], m + dx[k]
        if 0 <= ny < N and 0 <= nx < M:
            arr_3[ny][nx] = '.'

if T == 0 or T == 1:
    for i in arr_1:
        print(*i, sep='')
    exit()

if T % 2 == 0:
    for i in arr_2:
        print(*i, sep='')
    exit()

else:
    if (T // 2) % 2 == 1:
        for i in arr_3:
            print(*i, sep='')
        exit()

    if (T // 2) % 2 == 0:
        for i in arr_1:
            print(*i, sep='')