import pandas as pd
import os

df = pd.concat(
    map(pd.read_csv, ['BLOCK_CP.csv', 'BLOCK_GL.csv', 'BLOCK_LB.csv', 'BLOCK_NB.csv']),
    ignore_index = True
    )
# print(df)
# df.to_csv('BLOCK.csv')
