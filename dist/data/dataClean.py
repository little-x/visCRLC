import pandas as pd
import os

# Combine multiple csv files into one.
# df = pd.concat(
#     map(pd.read_csv, ['BLOCK_CP.csv', 'BLOCK_GL.csv', 'BLOCK_LB.csv', 'BLOCK_NB.csv']),
#     ignore_index = True
#     )
# print(df)
# df.to_csv('BLOCK.csv')

import geopandas as gpd
import glob

shapefiles = glob.glob("data/*.shp")  # Adjust path

for shp in shapefiles:
    gdf = gpd.read_file(shp)
    gdf.to_file(shp.replace(".shp", ".geojson"), driver="GeoJSON")
