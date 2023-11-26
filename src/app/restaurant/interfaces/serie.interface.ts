import { ISeriesApi, Time, LineData, WhitespaceData, LineSeriesOptions, DeepPartial, LineStyleOptions, SeriesOptionsCommon } from "lightweight-charts";

export interface Serie extends  ISeriesApi<'Line', Time, LineData<Time> | WhitespaceData<Time>, LineSeriesOptions, DeepPartial<LineStyleOptions & SeriesOptionsCommon>> {}