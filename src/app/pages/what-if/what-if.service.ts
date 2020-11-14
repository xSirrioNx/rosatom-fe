import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhatIfService {

  // public selected = 2;
  // public opened = [3];
  public MOCK_DATA = [
    {
      "id": 1,
      "parentIds": [
        null
      ],
      "name": "Работа 1",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 23,
      "forwardCost": 5233,
      "backwardCost": 6813,
      "durationCost": 2605,
      "currentCost": 1932,
      "childrenCost": 5074
    },
    {
      "id": 2,
      "parentIds": [
        null
      ],
      "name": "Работа 2",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 11,
      "forwardCost": 7165,
      "backwardCost": 8180,
      "durationCost": 6095,
      "currentCost": 1718,
      "childrenCost": 4908
    },
    {
      "id": 3,
      "parentIds": [
        null
      ],
      "name": "Работа 3",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 2,
      "forwardCost": 5040,
      "backwardCost": 8113,
      "durationCost": 3845,
      "currentCost": 8760,
      "childrenCost": 1568
    },
    {
      "id": 4,
      "parentIds": [
        null
      ],
      "name": "Работа 4",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 19,
      "forwardCost": 3664,
      "backwardCost": 3353,
      "durationCost": 3503,
      "currentCost": 3490,
      "childrenCost": 2587
    },
    {
      "id": 5,
      "parentIds": [
        null
      ],
      "name": "Работа 5",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 10,
      "forwardCost": 8811,
      "backwardCost": 8523,
      "durationCost": 7407,
      "currentCost": 7615,
      "childrenCost": 2285
    },
    {
      "id": 6,
      "parentIds": [
        null
      ],
      "name": "Работа 6",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 26,
      "forwardCost": 1251,
      "backwardCost": 7415,
      "durationCost": 304,
      "currentCost": 104,
      "childrenCost": 1617
    },
    {
      "id": 7,
      "parentIds": [
        null
      ],
      "name": "Работа 7",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 17,
      "forwardCost": 7545,
      "backwardCost": 3428,
      "durationCost": 2798,
      "currentCost": 8117,
      "childrenCost": 5869
    },
    {
      "id": 8,
      "parentIds": [
        null
      ],
      "name": "Работа 8",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 14,
      "forwardCost": 8693,
      "backwardCost": 8883,
      "durationCost": 7769,
      "currentCost": 6670,
      "childrenCost": 8807
    },
    {
      "id": 9,
      "parentIds": [
        null
      ],
      "name": "Работа 9",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 28,
      "forwardCost": 4547,
      "backwardCost": 5645,
      "durationCost": 4420,
      "currentCost": 7373,
      "childrenCost": 5755
    },
    {
      "id": 10,
      "parentIds": [
        null
      ],
      "name": "Работа 10",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 10,
      "forwardCost": 4282,
      "backwardCost": 8989,
      "durationCost": 6031,
      "currentCost": 213,
      "childrenCost": 4537
    },
    {
      "id": 11,
      "parentIds": [
        null
      ],
      "name": "Работа 11",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 14,
      "forwardCost": 8285,
      "backwardCost": 6896,
      "durationCost": 3997,
      "currentCost": 4073,
      "childrenCost": 6622
    },
    {
      "id": 12,
      "parentIds": [
        null
      ],
      "name": "Работа 12",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 29,
      "forwardCost": 790,
      "backwardCost": 8032,
      "durationCost": 837,
      "currentCost": 6736,
      "childrenCost": 3203
    },
    {
      "id": 13,
      "parentIds": [
        null
      ],
      "name": "Работа 13",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 7,
      "forwardCost": 6946,
      "backwardCost": 5966,
      "durationCost": 7283,
      "currentCost": 5964,
      "childrenCost": 1282
    },
    {
      "id": 14,
      "parentIds": [
        null
      ],
      "name": "Работа 14",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 29,
      "forwardCost": 1028,
      "backwardCost": 3900,
      "durationCost": 6218,
      "currentCost": 2360,
      "childrenCost": 4197
    },
    {
      "id": 15,
      "parentIds": [
        null
      ],
      "name": "Работа 15",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 18,
      "forwardCost": 7414,
      "backwardCost": 1514,
      "durationCost": 2125,
      "currentCost": 7640,
      "childrenCost": 468
    },
    {
      "id": 16,
      "parentIds": [
        null
      ],
      "name": "Работа 16",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 11,
      "forwardCost": 3756,
      "backwardCost": 4500,
      "durationCost": 7114,
      "currentCost": 7175,
      "childrenCost": 3963
    },
    {
      "id": 17,
      "parentIds": [
        null
      ],
      "name": "Работа 17",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 8,
      "forwardCost": 5215,
      "backwardCost": 1406,
      "durationCost": 7884,
      "currentCost": 327,
      "childrenCost": 4974
    },
    {
      "id": 18,
      "parentIds": [
        null
      ],
      "name": "Работа 18",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 15,
      "forwardCost": 3193,
      "backwardCost": 2606,
      "durationCost": 7467,
      "currentCost": 5446,
      "childrenCost": 8529
    },
    {
      "id": 19,
      "parentIds": [
        null
      ],
      "name": "Работа 19",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 13,
      "forwardCost": 1813,
      "backwardCost": 779,
      "durationCost": 6107,
      "currentCost": 4049,
      "childrenCost": 4759
    },
    {
      "id": 20,
      "parentIds": [
        null
      ],
      "name": "Работа 20",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 9,
      "forwardCost": 6092,
      "backwardCost": 222,
      "durationCost": 169,
      "currentCost": 773,
      "childrenCost": 3652
    },
    {
      "id": 21,
      "parentIds": [
        null
      ],
      "name": "Работа 21",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 18,
      "forwardCost": 8829,
      "backwardCost": 1307,
      "durationCost": 3458,
      "currentCost": 5904,
      "childrenCost": 4485
    },
    {
      "id": 22,
      "parentIds": [
        null
      ],
      "name": "Работа 22",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 26,
      "forwardCost": 4646,
      "backwardCost": 482,
      "durationCost": 8145,
      "currentCost": 5748,
      "childrenCost": 8602
    },
    {
      "id": 23,
      "parentIds": [
        null
      ],
      "name": "Работа 23",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 5,
      "forwardCost": 8802,
      "backwardCost": 4241,
      "durationCost": 7998,
      "currentCost": 5112,
      "childrenCost": 3610
    },
    {
      "id": 24,
      "parentIds": [
        null
      ],
      "name": "Работа 24",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 13,
      "forwardCost": 1564,
      "backwardCost": 6418,
      "durationCost": 5157,
      "currentCost": 6066,
      "childrenCost": 6956
    },
    {
      "id": 25,
      "parentIds": [
        null
      ],
      "name": "Работа 25",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 23,
      "forwardCost": 1373,
      "backwardCost": 2011,
      "durationCost": 614,
      "currentCost": 1041,
      "childrenCost": 8415
    },
    {
      "id": 26,
      "parentIds": [
        null
      ],
      "name": "Работа 26",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 16,
      "forwardCost": 2354,
      "backwardCost": 2171,
      "durationCost": 1361,
      "currentCost": 5820,
      "childrenCost": 6361
    },
    {
      "id": 27,
      "parentIds": [
        null
      ],
      "name": "Работа 27",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 28,
      "forwardCost": 7064,
      "backwardCost": 8546,
      "durationCost": 1546,
      "currentCost": 8244,
      "childrenCost": 1765
    },
    {
      "id": 28,
      "parentIds": [
        null
      ],
      "name": "Работа 28",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 11,
      "forwardCost": 1219,
      "backwardCost": 5386,
      "durationCost": 1621,
      "currentCost": 8385,
      "childrenCost": 6424
    },
    {
      "id": 29,
      "parentIds": [
        null
      ],
      "name": "Работа 29",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 7,
      "forwardCost": 8453,
      "backwardCost": 5203,
      "durationCost": 4411,
      "currentCost": 5873,
      "childrenCost": 7560
    },
    {
      "id": 30,
      "parentIds": [
        null
      ],
      "name": "Работа 30",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 14,
      "forwardCost": 5117,
      "backwardCost": 7914,
      "durationCost": 1482,
      "currentCost": 1626,
      "childrenCost": 1227
    },
    {
      "id": 31,
      "parentIds": [
        null
      ],
      "name": "Работа 31",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 25,
      "forwardCost": 6256,
      "backwardCost": 3999,
      "durationCost": 1567,
      "currentCost": 1219,
      "childrenCost": 3225
    },
    {
      "id": 32,
      "parentIds": [
        null
      ],
      "name": "Работа 32",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 1,
      "forwardCost": 2601,
      "backwardCost": 222,
      "durationCost": 5052,
      "currentCost": 2171,
      "childrenCost": 8959
    },
    {
      "id": 33,
      "parentIds": [
        null
      ],
      "name": "Работа 33",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 24,
      "forwardCost": 7647,
      "backwardCost": 2831,
      "durationCost": 2412,
      "currentCost": 7216,
      "childrenCost": 6361
    },
    {
      "id": 34,
      "parentIds": [
        null
      ],
      "name": "Работа 34",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 12,
      "forwardCost": 3395,
      "backwardCost": 2604,
      "durationCost": 4239,
      "currentCost": 4985,
      "childrenCost": 737
    },
    {
      "id": 35,
      "parentIds": [
        null
      ],
      "name": "Работа 35",
      "startDate": "2020-11-14T00:20:44.252Z",
      "duration": 29,
      "minDuration": 20,
      "forwardCost": 8543,
      "backwardCost": 8056,
      "durationCost": 1744,
      "currentCost": 5845,
      "childrenCost": 2034
    },
    {
      "id": 36,
      "parentIds": [
        5
      ],
      "name": "Работа 36",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 18,
      "forwardCost": 6267,
      "backwardCost": 2285,
      "durationCost": 2519,
      "currentCost": 3119,
      "childrenCost": 423
    },
    {
      "id": 37,
      "parentIds": [
        30
      ],
      "name": "Работа 37",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 3,
      "forwardCost": 587,
      "backwardCost": 6372,
      "durationCost": 4276,
      "currentCost": 1690,
      "childrenCost": 7188
    },
    {
      "id": 38,
      "parentIds": [
        35
      ],
      "name": "Работа 38",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 19,
      "forwardCost": 2294,
      "backwardCost": 6558,
      "durationCost": 2429,
      "currentCost": 6774,
      "childrenCost": 5022
    },
    {
      "id": 39,
      "parentIds": [
        9
      ],
      "name": "Работа 39",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 7,
      "forwardCost": 208,
      "backwardCost": 2922,
      "durationCost": 723,
      "currentCost": 2312,
      "childrenCost": 6932
    },
    {
      "id": 40,
      "parentIds": [
        21
      ],
      "name": "Работа 40",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 3,
      "forwardCost": 359,
      "backwardCost": 445,
      "durationCost": 6942,
      "currentCost": 2589,
      "childrenCost": 2536
    },
    {
      "id": 41,
      "parentIds": [
        29
      ],
      "name": "Работа 41",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 2,
      "forwardCost": 838,
      "backwardCost": 8865,
      "durationCost": 8416,
      "currentCost": 6223,
      "childrenCost": 6217
    },
    {
      "id": 42,
      "parentIds": [
        14
      ],
      "name": "Работа 42",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 16,
      "forwardCost": 4991,
      "backwardCost": 5417,
      "durationCost": 8248,
      "currentCost": 357,
      "childrenCost": 500
    },
    {
      "id": 43,
      "parentIds": [
        18
      ],
      "name": "Работа 43",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 20,
      "forwardCost": 6010,
      "backwardCost": 3536,
      "durationCost": 8802,
      "currentCost": 980,
      "childrenCost": 3847
    },
    {
      "id": 44,
      "parentIds": [
        20
      ],
      "name": "Работа 44",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 25,
      "forwardCost": 6440,
      "backwardCost": 7093,
      "durationCost": 7781,
      "currentCost": 1943,
      "childrenCost": 2510
    },
    {
      "id": 45,
      "parentIds": [
        19
      ],
      "name": "Работа 45",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 9,
      "forwardCost": 2134,
      "backwardCost": 4779,
      "durationCost": 8082,
      "currentCost": 4085,
      "childrenCost": 1281
    },
    {
      "id": 46,
      "parentIds": [
        25
      ],
      "name": "Работа 46",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 28,
      "forwardCost": 1348,
      "backwardCost": 5362,
      "durationCost": 8803,
      "currentCost": 8175,
      "childrenCost": 5601
    },
    {
      "id": 47,
      "parentIds": [
        29
      ],
      "name": "Работа 47",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 22,
      "forwardCost": 4654,
      "backwardCost": 714,
      "durationCost": 6507,
      "currentCost": 1164,
      "childrenCost": 8883
    },
    {
      "id": 48,
      "parentIds": [
        22
      ],
      "name": "Работа 48",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 10,
      "forwardCost": 6534,
      "backwardCost": 7276,
      "durationCost": 5027,
      "currentCost": 4450,
      "childrenCost": 5451
    },
    {
      "id": 49,
      "parentIds": [
        20
      ],
      "name": "Работа 49",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 1,
      "forwardCost": 1178,
      "backwardCost": 1974,
      "durationCost": 7934,
      "currentCost": 330,
      "childrenCost": 6489
    },
    {
      "id": 50,
      "parentIds": [
        19
      ],
      "name": "Работа 50",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 11,
      "forwardCost": 4146,
      "backwardCost": 5761,
      "durationCost": 8587,
      "currentCost": 3532,
      "childrenCost": 8956
    },
    {
      "id": 51,
      "parentIds": [
        26
      ],
      "name": "Работа 51",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 5,
      "forwardCost": 563,
      "backwardCost": 7460,
      "durationCost": 5970,
      "currentCost": 8033,
      "childrenCost": 4867
    },
    {
      "id": 52,
      "parentIds": [
        9
      ],
      "name": "Работа 52",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 8,
      "forwardCost": 2079,
      "backwardCost": 425,
      "durationCost": 5187,
      "currentCost": 7642,
      "childrenCost": 5977
    },
    {
      "id": 53,
      "parentIds": [
        10
      ],
      "name": "Работа 53",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 2,
      "forwardCost": 5380,
      "backwardCost": 1736,
      "durationCost": 7893,
      "currentCost": 4664,
      "childrenCost": 2327
    },
    {
      "id": 54,
      "parentIds": [
        25
      ],
      "name": "Работа 54",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 6,
      "forwardCost": 4736,
      "backwardCost": 5024,
      "durationCost": 6469,
      "currentCost": 1756,
      "childrenCost": 1588
    },
    {
      "id": 55,
      "parentIds": [
        26
      ],
      "name": "Работа 55",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 4,
      "forwardCost": 4530,
      "backwardCost": 5292,
      "durationCost": 1236,
      "currentCost": 6352,
      "childrenCost": 7979
    },
    {
      "id": 56,
      "parentIds": [
        28
      ],
      "name": "Работа 56",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 18,
      "forwardCost": 3322,
      "backwardCost": 812,
      "durationCost": 6729,
      "currentCost": 4524,
      "childrenCost": 1905
    },
    {
      "id": 57,
      "parentIds": [
        12
      ],
      "name": "Работа 57",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 10,
      "forwardCost": 860,
      "backwardCost": 7563,
      "durationCost": 1320,
      "currentCost": 6915,
      "childrenCost": 5999
    },
    {
      "id": 58,
      "parentIds": [
        34
      ],
      "name": "Работа 58",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 13,
      "forwardCost": 543,
      "backwardCost": 3300,
      "durationCost": 6568,
      "currentCost": 8037,
      "childrenCost": 8618
    },
    {
      "id": 59,
      "parentIds": [
        5
      ],
      "name": "Работа 59",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 27,
      "forwardCost": 1976,
      "backwardCost": 8920,
      "durationCost": 1321,
      "currentCost": 5128,
      "childrenCost": 145
    },
    {
      "id": 60,
      "parentIds": [
        22
      ],
      "name": "Работа 60",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 7,
      "forwardCost": 7032,
      "backwardCost": 3439,
      "durationCost": 5001,
      "currentCost": 4202,
      "childrenCost": 392
    },
    {
      "id": 61,
      "parentIds": [
        6
      ],
      "name": "Работа 61",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 12,
      "forwardCost": 820,
      "backwardCost": 2142,
      "durationCost": 1197,
      "currentCost": 6706,
      "childrenCost": 5062
    },
    {
      "id": 62,
      "parentIds": [
        9
      ],
      "name": "Работа 62",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 23,
      "forwardCost": 3305,
      "backwardCost": 3185,
      "durationCost": 5185,
      "currentCost": 831,
      "childrenCost": 2239
    },
    {
      "id": 63,
      "parentIds": [
        35
      ],
      "name": "Работа 63",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 30,
      "forwardCost": 928,
      "backwardCost": 2960,
      "durationCost": 5437,
      "currentCost": 704,
      "childrenCost": 8330
    },
    {
      "id": 64,
      "parentIds": [
        26
      ],
      "name": "Работа 64",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 18,
      "forwardCost": 3260,
      "backwardCost": 7756,
      "durationCost": 5469,
      "currentCost": 3305,
      "childrenCost": 1617
    },
    {
      "id": 65,
      "parentIds": [
        27
      ],
      "name": "Работа 65",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 25,
      "forwardCost": 1954,
      "backwardCost": 8604,
      "durationCost": 3347,
      "currentCost": 2607,
      "childrenCost": 4466
    },
    {
      "id": 66,
      "parentIds": [
        7
      ],
      "name": "Работа 66",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 30,
      "forwardCost": 6306,
      "backwardCost": 1554,
      "durationCost": 5627,
      "currentCost": 4869,
      "childrenCost": 6942
    },
    {
      "id": 67,
      "parentIds": [
        17
      ],
      "name": "Работа 67",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 28,
      "forwardCost": 2372,
      "backwardCost": 4546,
      "durationCost": 4911,
      "currentCost": 2017,
      "childrenCost": 7741
    },
    {
      "id": 68,
      "parentIds": [
        10
      ],
      "name": "Работа 68",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 20,
      "forwardCost": 5825,
      "backwardCost": 8224,
      "durationCost": 3118,
      "currentCost": 713,
      "childrenCost": 5502
    },
    {
      "id": 69,
      "parentIds": [
        17
      ],
      "name": "Работа 69",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 19,
      "forwardCost": 5691,
      "backwardCost": 4917,
      "durationCost": 3572,
      "currentCost": 461,
      "childrenCost": 8398
    },
    {
      "id": 70,
      "parentIds": [
        6
      ],
      "name": "Работа 70",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 1,
      "forwardCost": 1718,
      "backwardCost": 2228,
      "durationCost": 7322,
      "currentCost": 5013,
      "childrenCost": 8302
    },
    {
      "id": 71,
      "parentIds": [
        12
      ],
      "name": "Работа 71",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 6,
      "forwardCost": 6021,
      "backwardCost": 5851,
      "durationCost": 2957,
      "currentCost": 5512,
      "childrenCost": 5464
    },
    {
      "id": 72,
      "parentIds": [
        2
      ],
      "name": "Работа 72",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 3,
      "forwardCost": 2031,
      "backwardCost": 3354,
      "durationCost": 2044,
      "currentCost": 4836,
      "childrenCost": 7824
    },
    {
      "id": 73,
      "parentIds": [
        30
      ],
      "name": "Работа 73",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 10,
      "forwardCost": 3141,
      "backwardCost": 2217,
      "durationCost": 8901,
      "currentCost": 8553,
      "childrenCost": 6160
    },
    {
      "id": 74,
      "parentIds": [
        24
      ],
      "name": "Работа 74",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 26,
      "forwardCost": 8318,
      "backwardCost": 4677,
      "durationCost": 1526,
      "currentCost": 1112,
      "childrenCost": 2697
    },
    {
      "id": 75,
      "parentIds": [
        22
      ],
      "name": "Работа 75",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 12,
      "forwardCost": 4568,
      "backwardCost": 4871,
      "durationCost": 6028,
      "currentCost": 2785,
      "childrenCost": 8258
    },
    {
      "id": 76,
      "parentIds": [
        25
      ],
      "name": "Работа 76",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 9,
      "forwardCost": 1317,
      "backwardCost": 4310,
      "durationCost": 4235,
      "currentCost": 3177,
      "childrenCost": 5366
    },
    {
      "id": 77,
      "parentIds": [
        12
      ],
      "name": "Работа 77",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 30,
      "forwardCost": 8649,
      "backwardCost": 4942,
      "durationCost": 2914,
      "currentCost": 8565,
      "childrenCost": 4083
    },
    {
      "id": 78,
      "parentIds": [
        32
      ],
      "name": "Работа 78",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 14,
      "forwardCost": 4531,
      "backwardCost": 3528,
      "durationCost": 7641,
      "currentCost": 6104,
      "childrenCost": 5089
    },
    {
      "id": 79,
      "parentIds": [
        25
      ],
      "name": "Работа 79",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 25,
      "forwardCost": 2770,
      "backwardCost": 7261,
      "durationCost": 7719,
      "currentCost": 6535,
      "childrenCost": 5815
    },
    {
      "id": 80,
      "parentIds": [
        34
      ],
      "name": "Работа 80",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 15,
      "forwardCost": 776,
      "backwardCost": 1150,
      "durationCost": 121,
      "currentCost": 839,
      "childrenCost": 6043
    },
    {
      "id": 81,
      "parentIds": [
        35
      ],
      "name": "Работа 81",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 3,
      "forwardCost": 8609,
      "backwardCost": 6559,
      "durationCost": 2734,
      "currentCost": 3515,
      "childrenCost": 4381
    },
    {
      "id": 82,
      "parentIds": [
        28
      ],
      "name": "Работа 82",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 18,
      "forwardCost": 8710,
      "backwardCost": 7265,
      "durationCost": 8532,
      "currentCost": 7846,
      "childrenCost": 129
    },
    {
      "id": 83,
      "parentIds": [
        6
      ],
      "name": "Работа 83",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 21,
      "forwardCost": 8097,
      "backwardCost": 2229,
      "durationCost": 7949,
      "currentCost": 7742,
      "childrenCost": 1666
    },
    {
      "id": 84,
      "parentIds": [
        32
      ],
      "name": "Работа 84",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 13,
      "forwardCost": 2025,
      "backwardCost": 4822,
      "durationCost": 3537,
      "currentCost": 4853,
      "childrenCost": 6883
    },
    {
      "id": 85,
      "parentIds": [
        21
      ],
      "name": "Работа 85",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 24,
      "forwardCost": 4654,
      "backwardCost": 211,
      "durationCost": 7261,
      "currentCost": 7538,
      "childrenCost": 2751
    },
    {
      "id": 86,
      "parentIds": [
        13
      ],
      "name": "Работа 86",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 28,
      "forwardCost": 3597,
      "backwardCost": 7473,
      "durationCost": 4703,
      "currentCost": 635,
      "childrenCost": 7111
    },
    {
      "id": 87,
      "parentIds": [
        23
      ],
      "name": "Работа 87",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 27,
      "forwardCost": 7511,
      "backwardCost": 4144,
      "durationCost": 8380,
      "currentCost": 4692,
      "childrenCost": 3809
    },
    {
      "id": 88,
      "parentIds": [
        22
      ],
      "name": "Работа 88",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 26,
      "forwardCost": 3675,
      "backwardCost": 1173,
      "durationCost": 1618,
      "currentCost": 2271,
      "childrenCost": 1443
    },
    {
      "id": 89,
      "parentIds": [
        14
      ],
      "name": "Работа 89",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 21,
      "forwardCost": 8828,
      "backwardCost": 3044,
      "durationCost": 6917,
      "currentCost": 6582,
      "childrenCost": 7543
    },
    {
      "id": 90,
      "parentIds": [
        1
      ],
      "name": "Работа 90",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 2,
      "forwardCost": 4023,
      "backwardCost": 2542,
      "durationCost": 6098,
      "currentCost": 4796,
      "childrenCost": 3675
    },
    {
      "id": 91,
      "parentIds": [
        18
      ],
      "name": "Работа 91",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 10,
      "forwardCost": 1280,
      "backwardCost": 3693,
      "durationCost": 4495,
      "currentCost": 2139,
      "childrenCost": 2735
    },
    {
      "id": 92,
      "parentIds": [
        20
      ],
      "name": "Работа 92",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 23,
      "forwardCost": 5259,
      "backwardCost": 8127,
      "durationCost": 8745,
      "currentCost": 8480,
      "childrenCost": 2804
    },
    {
      "id": 93,
      "parentIds": [
        9
      ],
      "name": "Работа 93",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 14,
      "forwardCost": 8809,
      "backwardCost": 6768,
      "durationCost": 1368,
      "currentCost": 6147,
      "childrenCost": 1691
    },
    {
      "id": 94,
      "parentIds": [
        13
      ],
      "name": "Работа 94",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 7,
      "forwardCost": 841,
      "backwardCost": 3222,
      "durationCost": 5327,
      "currentCost": 2664,
      "childrenCost": 8965
    },
    {
      "id": 95,
      "parentIds": [
        10
      ],
      "name": "Работа 95",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 7,
      "forwardCost": 876,
      "backwardCost": 3239,
      "durationCost": 4226,
      "currentCost": 5010,
      "childrenCost": 4142
    },
    {
      "id": 96,
      "parentIds": [
        23
      ],
      "name": "Работа 96",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 21,
      "forwardCost": 4840,
      "backwardCost": 6092,
      "durationCost": 2457,
      "currentCost": 8837,
      "childrenCost": 7793
    },
    {
      "id": 97,
      "parentIds": [
        25
      ],
      "name": "Работа 97",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 28,
      "forwardCost": 4029,
      "backwardCost": 8332,
      "durationCost": 6161,
      "currentCost": 8704,
      "childrenCost": 3065
    },
    {
      "id": 98,
      "parentIds": [
        34
      ],
      "name": "Работа 98",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 3,
      "forwardCost": 775,
      "backwardCost": 963,
      "durationCost": 4671,
      "currentCost": 8669,
      "childrenCost": 2412
    },
    {
      "id": 99,
      "parentIds": [
        14
      ],
      "name": "Работа 99",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 16,
      "forwardCost": 6122,
      "backwardCost": 191,
      "durationCost": 3537,
      "currentCost": 3928,
      "childrenCost": 3338
    },
    {
      "id": 100,
      "parentIds": [
        11
      ],
      "name": "Работа 100",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 12,
      "forwardCost": 4322,
      "backwardCost": 5714,
      "durationCost": 2588,
      "currentCost": 2365,
      "childrenCost": 6585
    },
    {
      "id": 101,
      "parentIds": [
        16
      ],
      "name": "Работа 101",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 15,
      "forwardCost": 1871,
      "backwardCost": 7886,
      "durationCost": 1053,
      "currentCost": 3050,
      "childrenCost": 3251
    },
    {
      "id": 102,
      "parentIds": [
        19
      ],
      "name": "Работа 102",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 5,
      "forwardCost": 5240,
      "backwardCost": 4350,
      "durationCost": 8357,
      "currentCost": 3492,
      "childrenCost": 7490
    },
    {
      "id": 103,
      "parentIds": [
        17
      ],
      "name": "Работа 103",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 29,
      "forwardCost": 1455,
      "backwardCost": 6717,
      "durationCost": 8539,
      "currentCost": 7410,
      "childrenCost": 6616
    },
    {
      "id": 104,
      "parentIds": [
        23
      ],
      "name": "Работа 104",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 19,
      "forwardCost": 6165,
      "backwardCost": 5465,
      "durationCost": 2619,
      "currentCost": 1437,
      "childrenCost": 4220
    },
    {
      "id": 105,
      "parentIds": [
        11
      ],
      "name": "Работа 105",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 30,
      "forwardCost": 2571,
      "backwardCost": 4896,
      "durationCost": 5594,
      "currentCost": 288,
      "childrenCost": 2424
    },
    {
      "id": 106,
      "parentIds": [
        11
      ],
      "name": "Работа 106",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 13,
      "forwardCost": 6686,
      "backwardCost": 2306,
      "durationCost": 2115,
      "currentCost": 1650,
      "childrenCost": 6646
    },
    {
      "id": 107,
      "parentIds": [
        30
      ],
      "name": "Работа 107",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 23,
      "forwardCost": 5061,
      "backwardCost": 1949,
      "durationCost": 1459,
      "currentCost": 2809,
      "childrenCost": 1367
    },
    {
      "id": 108,
      "parentIds": [
        29
      ],
      "name": "Работа 108",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 12,
      "forwardCost": 7655,
      "backwardCost": 6777,
      "durationCost": 5560,
      "currentCost": 5535,
      "childrenCost": 3044
    },
    {
      "id": 109,
      "parentIds": [
        29
      ],
      "name": "Работа 109",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 10,
      "forwardCost": 1691,
      "backwardCost": 1277,
      "durationCost": 8558,
      "currentCost": 8589,
      "childrenCost": 1298
    },
    {
      "id": 110,
      "parentIds": [
        16
      ],
      "name": "Работа 110",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 30,
      "forwardCost": 4374,
      "backwardCost": 4375,
      "durationCost": 1029,
      "currentCost": 6329,
      "childrenCost": 7298
    },
    {
      "id": 111,
      "parentIds": [
        32
      ],
      "name": "Работа 111",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 2,
      "forwardCost": 6384,
      "backwardCost": 7905,
      "durationCost": 3992,
      "currentCost": 163,
      "childrenCost": 7632
    },
    {
      "id": 112,
      "parentIds": [
        32
      ],
      "name": "Работа 112",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 30,
      "forwardCost": 6017,
      "backwardCost": 5322,
      "durationCost": 1078,
      "currentCost": 659,
      "childrenCost": 6797
    },
    {
      "id": 113,
      "parentIds": [
        14
      ],
      "name": "Работа 113",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 28,
      "forwardCost": 3125,
      "backwardCost": 3289,
      "durationCost": 3777,
      "currentCost": 6244,
      "childrenCost": 8593
    },
    {
      "id": 114,
      "parentIds": [
        9
      ],
      "name": "Работа 114",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 18,
      "forwardCost": 7836,
      "backwardCost": 2895,
      "durationCost": 4559,
      "currentCost": 4851,
      "childrenCost": 3499
    },
    {
      "id": 115,
      "parentIds": [
        3
      ],
      "name": "Работа 115",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 28,
      "forwardCost": 357,
      "backwardCost": 2213,
      "durationCost": 999,
      "currentCost": 760,
      "childrenCost": 3595
    },
    {
      "id": 116,
      "parentIds": [
        2
      ],
      "name": "Работа 116",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 8,
      "forwardCost": 6920,
      "backwardCost": 4883,
      "durationCost": 4858,
      "currentCost": 845,
      "childrenCost": 362
    },
    {
      "id": 117,
      "parentIds": [
        23
      ],
      "name": "Работа 117",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 13,
      "forwardCost": 1682,
      "backwardCost": 3052,
      "durationCost": 3048,
      "currentCost": 1258,
      "childrenCost": 893
    },
    {
      "id": 118,
      "parentIds": [
        1
      ],
      "name": "Работа 118",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 2,
      "forwardCost": 2868,
      "backwardCost": 5929,
      "durationCost": 2767,
      "currentCost": 1334,
      "childrenCost": 4507
    },
    {
      "id": 119,
      "parentIds": [
        18
      ],
      "name": "Работа 119",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 19,
      "forwardCost": 5331,
      "backwardCost": 2157,
      "durationCost": 2600,
      "currentCost": 952,
      "childrenCost": 6943
    },
    {
      "id": 120,
      "parentIds": [
        2
      ],
      "name": "Работа 120",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 27,
      "forwardCost": 4322,
      "backwardCost": 376,
      "durationCost": 2687,
      "currentCost": 7413,
      "childrenCost": 2559
    },
    {
      "id": 121,
      "parentIds": [
        15
      ],
      "name": "Работа 121",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 22,
      "forwardCost": 5055,
      "backwardCost": 152,
      "durationCost": 6586,
      "currentCost": 140,
      "childrenCost": 7150
    },
    {
      "id": 122,
      "parentIds": [
        18
      ],
      "name": "Работа 122",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 15,
      "forwardCost": 8851,
      "backwardCost": 1735,
      "durationCost": 3129,
      "currentCost": 1000,
      "childrenCost": 6821
    },
    {
      "id": 123,
      "parentIds": [
        23
      ],
      "name": "Работа 123",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 6,
      "forwardCost": 1269,
      "backwardCost": 8902,
      "durationCost": 3532,
      "currentCost": 8243,
      "childrenCost": 6817
    },
    {
      "id": 124,
      "parentIds": [
        31
      ],
      "name": "Работа 124",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 24,
      "forwardCost": 3364,
      "backwardCost": 8949,
      "durationCost": 3750,
      "currentCost": 1621,
      "childrenCost": 1300
    },
    {
      "id": 125,
      "parentIds": [
        22
      ],
      "name": "Работа 125",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 3,
      "forwardCost": 931,
      "backwardCost": 1153,
      "durationCost": 4432,
      "currentCost": 7905,
      "childrenCost": 1426
    },
    {
      "id": 126,
      "parentIds": [
        9
      ],
      "name": "Работа 126",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 15,
      "forwardCost": 5677,
      "backwardCost": 209,
      "durationCost": 8756,
      "currentCost": 212,
      "childrenCost": 6351
    },
    {
      "id": 127,
      "parentIds": [
        16
      ],
      "name": "Работа 127",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 6,
      "forwardCost": 561,
      "backwardCost": 8653,
      "durationCost": 5621,
      "currentCost": 1253,
      "childrenCost": 1948
    },
    {
      "id": 128,
      "parentIds": [
        22
      ],
      "name": "Работа 128",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 25,
      "forwardCost": 3891,
      "backwardCost": 6888,
      "durationCost": 917,
      "currentCost": 6259,
      "childrenCost": 2087
    },
    {
      "id": 129,
      "parentIds": [
        17
      ],
      "name": "Работа 129",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 5,
      "forwardCost": 2144,
      "backwardCost": 3187,
      "durationCost": 1628,
      "currentCost": 5370,
      "childrenCost": 2387
    },
    {
      "id": 130,
      "parentIds": [
        23
      ],
      "name": "Работа 130",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 9,
      "forwardCost": 6261,
      "backwardCost": 3583,
      "durationCost": 8301,
      "currentCost": 7582,
      "childrenCost": 7455
    },
    {
      "id": 131,
      "parentIds": [
        10
      ],
      "name": "Работа 131",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 5,
      "forwardCost": 1554,
      "backwardCost": 8810,
      "durationCost": 4210,
      "currentCost": 6924,
      "childrenCost": 3207
    },
    {
      "id": 132,
      "parentIds": [
        8
      ],
      "name": "Работа 132",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 28,
      "forwardCost": 2789,
      "backwardCost": 6389,
      "durationCost": 2349,
      "currentCost": 4092,
      "childrenCost": 8323
    },
    {
      "id": 133,
      "parentIds": [
        15
      ],
      "name": "Работа 133",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 5,
      "forwardCost": 8631,
      "backwardCost": 593,
      "durationCost": 3887,
      "currentCost": 3976,
      "childrenCost": 7433
    },
    {
      "id": 134,
      "parentIds": [
        5
      ],
      "name": "Работа 134",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 12,
      "forwardCost": 5376,
      "backwardCost": 5018,
      "durationCost": 5750,
      "currentCost": 1783,
      "childrenCost": 5093
    },
    {
      "id": 135,
      "parentIds": [
        20
      ],
      "name": "Работа 135",
      "startDate": "2020-11-14T00:48:12.011Z",
      "duration": 18,
      "minDuration": 10,
      "forwardCost": 8754,
      "backwardCost": 5570,
      "durationCost": 198,
      "currentCost": 7711,
      "childrenCost": 4188
    },
    {
      "id": 136,
      "parentIds": [
        18
      ],
      "name": "Работа 136",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 8,
      "forwardCost": 1950,
      "backwardCost": 4547,
      "durationCost": 6102,
      "currentCost": 3350,
      "childrenCost": 5989
    },
    {
      "id": 137,
      "parentIds": [
        12
      ],
      "name": "Работа 137",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 6,
      "forwardCost": 8405,
      "backwardCost": 6145,
      "durationCost": 3283,
      "currentCost": 2072,
      "childrenCost": 1517
    },
    {
      "id": 138,
      "parentIds": [
        30
      ],
      "name": "Работа 138",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 226,
      "backwardCost": 1355,
      "durationCost": 2258,
      "currentCost": 2174,
      "childrenCost": 6927
    },
    {
      "id": 139,
      "parentIds": [
        15
      ],
      "name": "Работа 139",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 19,
      "forwardCost": 1865,
      "backwardCost": 5602,
      "durationCost": 4161,
      "currentCost": 4828,
      "childrenCost": 6894
    },
    {
      "id": 140,
      "parentIds": [
        16
      ],
      "name": "Работа 140",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 28,
      "forwardCost": 8916,
      "backwardCost": 8856,
      "durationCost": 6527,
      "currentCost": 8486,
      "childrenCost": 8355
    },
    {
      "id": 141,
      "parentIds": [
        8
      ],
      "name": "Работа 141",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 18,
      "forwardCost": 7373,
      "backwardCost": 7540,
      "durationCost": 804,
      "currentCost": 4872,
      "childrenCost": 8314
    },
    {
      "id": 142,
      "parentIds": [
        8
      ],
      "name": "Работа 142",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 14,
      "forwardCost": 3351,
      "backwardCost": 1911,
      "durationCost": 1493,
      "currentCost": 5035,
      "childrenCost": 1931
    },
    {
      "id": 143,
      "parentIds": [
        29
      ],
      "name": "Работа 143",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 24,
      "forwardCost": 8196,
      "backwardCost": 7107,
      "durationCost": 7547,
      "currentCost": 4492,
      "childrenCost": 2927
    },
    {
      "id": 144,
      "parentIds": [
        10
      ],
      "name": "Работа 144",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 29,
      "forwardCost": 2578,
      "backwardCost": 8307,
      "durationCost": 3016,
      "currentCost": 7119,
      "childrenCost": 6329
    },
    {
      "id": 145,
      "parentIds": [
        17
      ],
      "name": "Работа 145",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 27,
      "forwardCost": 5203,
      "backwardCost": 4050,
      "durationCost": 2817,
      "currentCost": 1728,
      "childrenCost": 8585
    },
    {
      "id": 146,
      "parentIds": [
        19
      ],
      "name": "Работа 146",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 4039,
      "backwardCost": 7652,
      "durationCost": 434,
      "currentCost": 2733,
      "childrenCost": 6577
    },
    {
      "id": 147,
      "parentIds": [
        20
      ],
      "name": "Работа 147",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 24,
      "forwardCost": 203,
      "backwardCost": 5896,
      "durationCost": 4879,
      "currentCost": 5251,
      "childrenCost": 2580
    },
    {
      "id": 148,
      "parentIds": [
        23
      ],
      "name": "Работа 148",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 20,
      "forwardCost": 5245,
      "backwardCost": 8782,
      "durationCost": 7909,
      "currentCost": 7950,
      "childrenCost": 6040
    },
    {
      "id": 149,
      "parentIds": [
        33
      ],
      "name": "Работа 149",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 10,
      "forwardCost": 935,
      "backwardCost": 395,
      "durationCost": 8652,
      "currentCost": 2363,
      "childrenCost": 8460
    },
    {
      "id": 150,
      "parentIds": [
        21
      ],
      "name": "Работа 150",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 22,
      "forwardCost": 4370,
      "backwardCost": 6180,
      "durationCost": 5290,
      "currentCost": 7776,
      "childrenCost": 573
    },
    {
      "id": 151,
      "parentIds": [
        24
      ],
      "name": "Работа 151",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 1,
      "forwardCost": 3147,
      "backwardCost": 2779,
      "durationCost": 812,
      "currentCost": 723,
      "childrenCost": 5713
    },
    {
      "id": 152,
      "parentIds": [
        26
      ],
      "name": "Работа 152",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 29,
      "forwardCost": 3358,
      "backwardCost": 4487,
      "durationCost": 8343,
      "currentCost": 6455,
      "childrenCost": 2053
    },
    {
      "id": 153,
      "parentIds": [
        4
      ],
      "name": "Работа 153",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 3,
      "forwardCost": 5981,
      "backwardCost": 7924,
      "durationCost": 8264,
      "currentCost": 2536,
      "childrenCost": 6429
    },
    {
      "id": 154,
      "parentIds": [
        25
      ],
      "name": "Работа 154",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 13,
      "forwardCost": 2986,
      "backwardCost": 8974,
      "durationCost": 3736,
      "currentCost": 6148,
      "childrenCost": 4148
    },
    {
      "id": 155,
      "parentIds": [
        24
      ],
      "name": "Работа 155",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 10,
      "forwardCost": 8043,
      "backwardCost": 4705,
      "durationCost": 3151,
      "currentCost": 7258,
      "childrenCost": 5220
    },
    {
      "id": 156,
      "parentIds": [
        3
      ],
      "name": "Работа 156",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 4,
      "forwardCost": 2532,
      "backwardCost": 4455,
      "durationCost": 4165,
      "currentCost": 297,
      "childrenCost": 6453
    },
    {
      "id": 157,
      "parentIds": [
        9
      ],
      "name": "Работа 157",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 2,
      "forwardCost": 316,
      "backwardCost": 1377,
      "durationCost": 8828,
      "currentCost": 2747,
      "childrenCost": 1422
    },
    {
      "id": 158,
      "parentIds": [
        14
      ],
      "name": "Работа 158",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 5,
      "forwardCost": 877,
      "backwardCost": 3993,
      "durationCost": 2754,
      "currentCost": 7220,
      "childrenCost": 7108
    },
    {
      "id": 159,
      "parentIds": [
        26
      ],
      "name": "Работа 159",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 18,
      "forwardCost": 2545,
      "backwardCost": 7864,
      "durationCost": 1086,
      "currentCost": 1511,
      "childrenCost": 5806
    },
    {
      "id": 160,
      "parentIds": [
        13
      ],
      "name": "Работа 160",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 9,
      "forwardCost": 6281,
      "backwardCost": 7801,
      "durationCost": 3124,
      "currentCost": 1623,
      "childrenCost": 5334
    },
    {
      "id": 161,
      "parentIds": [
        20
      ],
      "name": "Работа 161",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 9,
      "forwardCost": 1654,
      "backwardCost": 2165,
      "durationCost": 7923,
      "currentCost": 6181,
      "childrenCost": 6737
    },
    {
      "id": 162,
      "parentIds": [
        30
      ],
      "name": "Работа 162",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 15,
      "forwardCost": 1217,
      "backwardCost": 2317,
      "durationCost": 1507,
      "currentCost": 7049,
      "childrenCost": 5581
    },
    {
      "id": 163,
      "parentIds": [
        25
      ],
      "name": "Работа 163",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 1,
      "forwardCost": 6399,
      "backwardCost": 6454,
      "durationCost": 3518,
      "currentCost": 1283,
      "childrenCost": 3800
    },
    {
      "id": 164,
      "parentIds": [
        19
      ],
      "name": "Работа 164",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 12,
      "forwardCost": 1123,
      "backwardCost": 7983,
      "durationCost": 2618,
      "currentCost": 6508,
      "childrenCost": 8351
    },
    {
      "id": 165,
      "parentIds": [
        32
      ],
      "name": "Работа 165",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 27,
      "forwardCost": 3945,
      "backwardCost": 5358,
      "durationCost": 7655,
      "currentCost": 7953,
      "childrenCost": 1564
    },
    {
      "id": 166,
      "parentIds": [
        8
      ],
      "name": "Работа 166",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 1271,
      "backwardCost": 7388,
      "durationCost": 1742,
      "currentCost": 6764,
      "childrenCost": 6579
    },
    {
      "id": 167,
      "parentIds": [
        3
      ],
      "name": "Работа 167",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 28,
      "forwardCost": 6792,
      "backwardCost": 5203,
      "durationCost": 6436,
      "currentCost": 1940,
      "childrenCost": 3686
    },
    {
      "id": 168,
      "parentIds": [
        26
      ],
      "name": "Работа 168",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 5,
      "forwardCost": 8846,
      "backwardCost": 1384,
      "durationCost": 751,
      "currentCost": 4588,
      "childrenCost": 8874
    },
    {
      "id": 169,
      "parentIds": [
        17
      ],
      "name": "Работа 169",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 14,
      "forwardCost": 2537,
      "backwardCost": 201,
      "durationCost": 3357,
      "currentCost": 3716,
      "childrenCost": 2686
    },
    {
      "id": 170,
      "parentIds": [
        6
      ],
      "name": "Работа 170",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 15,
      "forwardCost": 5806,
      "backwardCost": 2774,
      "durationCost": 3116,
      "currentCost": 2596,
      "childrenCost": 281
    },
    {
      "id": 171,
      "parentIds": [
        21
      ],
      "name": "Работа 171",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 10,
      "forwardCost": 8013,
      "backwardCost": 6243,
      "durationCost": 8590,
      "currentCost": 8958,
      "childrenCost": 6815
    },
    {
      "id": 172,
      "parentIds": [
        2
      ],
      "name": "Работа 172",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 6547,
      "backwardCost": 5627,
      "durationCost": 3028,
      "currentCost": 3763,
      "childrenCost": 8166
    },
    {
      "id": 173,
      "parentIds": [
        8
      ],
      "name": "Работа 173",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 24,
      "forwardCost": 4323,
      "backwardCost": 2438,
      "durationCost": 2070,
      "currentCost": 8261,
      "childrenCost": 8186
    },
    {
      "id": 174,
      "parentIds": [
        14
      ],
      "name": "Работа 174",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 3,
      "forwardCost": 1555,
      "backwardCost": 463,
      "durationCost": 3419,
      "currentCost": 1082,
      "childrenCost": 274
    },
    {
      "id": 175,
      "parentIds": [
        1
      ],
      "name": "Работа 175",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 18,
      "forwardCost": 285,
      "backwardCost": 6037,
      "durationCost": 514,
      "currentCost": 1198,
      "childrenCost": 3727
    },
    {
      "id": 176,
      "parentIds": [
        35
      ],
      "name": "Работа 176",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 4216,
      "backwardCost": 7235,
      "durationCost": 176,
      "currentCost": 5123,
      "childrenCost": 1457
    },
    {
      "id": 177,
      "parentIds": [
        10
      ],
      "name": "Работа 177",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 21,
      "forwardCost": 1174,
      "backwardCost": 7830,
      "durationCost": 277,
      "currentCost": 8144,
      "childrenCost": 1617
    },
    {
      "id": 178,
      "parentIds": [
        30
      ],
      "name": "Работа 178",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 8,
      "forwardCost": 8597,
      "backwardCost": 1249,
      "durationCost": 6025,
      "currentCost": 8172,
      "childrenCost": 7748
    },
    {
      "id": 179,
      "parentIds": [
        5
      ],
      "name": "Работа 179",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 29,
      "forwardCost": 3565,
      "backwardCost": 1591,
      "durationCost": 8855,
      "currentCost": 5822,
      "childrenCost": 959
    },
    {
      "id": 180,
      "parentIds": [
        8
      ],
      "name": "Работа 180",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 15,
      "forwardCost": 1797,
      "backwardCost": 4722,
      "durationCost": 4899,
      "currentCost": 6992,
      "childrenCost": 8012
    },
    {
      "id": 181,
      "parentIds": [
        7
      ],
      "name": "Работа 181",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 23,
      "forwardCost": 8196,
      "backwardCost": 231,
      "durationCost": 6054,
      "currentCost": 6519,
      "childrenCost": 3165
    },
    {
      "id": 182,
      "parentIds": [
        26
      ],
      "name": "Работа 182",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 13,
      "forwardCost": 7181,
      "backwardCost": 1521,
      "durationCost": 8413,
      "currentCost": 5061,
      "childrenCost": 5338
    },
    {
      "id": 183,
      "parentIds": [
        11
      ],
      "name": "Работа 183",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 19,
      "forwardCost": 2202,
      "backwardCost": 6213,
      "durationCost": 4574,
      "currentCost": 7356,
      "childrenCost": 761
    },
    {
      "id": 184,
      "parentIds": [
        21
      ],
      "name": "Работа 184",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 23,
      "forwardCost": 5715,
      "backwardCost": 181,
      "durationCost": 8302,
      "currentCost": 6071,
      "childrenCost": 3752
    },
    {
      "id": 185,
      "parentIds": [
        7
      ],
      "name": "Работа 185",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 5,
      "forwardCost": 4599,
      "backwardCost": 2010,
      "durationCost": 8291,
      "currentCost": 445,
      "childrenCost": 7491
    },
    {
      "id": 186,
      "parentIds": [
        26
      ],
      "name": "Работа 186",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 22,
      "forwardCost": 5840,
      "backwardCost": 2598,
      "durationCost": 8784,
      "currentCost": 1070,
      "childrenCost": 5875
    },
    {
      "id": 187,
      "parentIds": [
        2
      ],
      "name": "Работа 187",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 4,
      "forwardCost": 265,
      "backwardCost": 3167,
      "durationCost": 3187,
      "currentCost": 1565,
      "childrenCost": 3818
    },
    {
      "id": 188,
      "parentIds": [
        21
      ],
      "name": "Работа 188",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 4,
      "forwardCost": 4720,
      "backwardCost": 4416,
      "durationCost": 1611,
      "currentCost": 5560,
      "childrenCost": 2937
    },
    {
      "id": 189,
      "parentIds": [
        8
      ],
      "name": "Работа 189",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 28,
      "forwardCost": 2708,
      "backwardCost": 2875,
      "durationCost": 4435,
      "currentCost": 5098,
      "childrenCost": 7426
    },
    {
      "id": 190,
      "parentIds": [
        23
      ],
      "name": "Работа 190",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 17,
      "forwardCost": 4244,
      "backwardCost": 1246,
      "durationCost": 5269,
      "currentCost": 5134,
      "childrenCost": 1402
    },
    {
      "id": 191,
      "parentIds": [
        6
      ],
      "name": "Работа 191",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 8,
      "forwardCost": 4170,
      "backwardCost": 4021,
      "durationCost": 2402,
      "currentCost": 347,
      "childrenCost": 4115
    },
    {
      "id": 192,
      "parentIds": [
        10
      ],
      "name": "Работа 192",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 4,
      "forwardCost": 4742,
      "backwardCost": 1378,
      "durationCost": 8899,
      "currentCost": 4886,
      "childrenCost": 5983
    },
    {
      "id": 193,
      "parentIds": [
        27
      ],
      "name": "Работа 193",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 14,
      "forwardCost": 573,
      "backwardCost": 5024,
      "durationCost": 3510,
      "currentCost": 1678,
      "childrenCost": 2776
    },
    {
      "id": 194,
      "parentIds": [
        21
      ],
      "name": "Работа 194",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 9,
      "forwardCost": 4017,
      "backwardCost": 4970,
      "durationCost": 8895,
      "currentCost": 8847,
      "childrenCost": 8085
    },
    {
      "id": 195,
      "parentIds": [
        30
      ],
      "name": "Работа 195",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 14,
      "forwardCost": 6984,
      "backwardCost": 4949,
      "durationCost": 5786,
      "currentCost": 4948,
      "childrenCost": 799
    },
    {
      "id": 196,
      "parentIds": [
        11
      ],
      "name": "Работа 196",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 22,
      "forwardCost": 4282,
      "backwardCost": 2161,
      "durationCost": 584,
      "currentCost": 6243,
      "childrenCost": 1203
    },
    {
      "id": 197,
      "parentIds": [
        5
      ],
      "name": "Работа 197",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 8,
      "forwardCost": 467,
      "backwardCost": 2210,
      "durationCost": 3862,
      "currentCost": 3722,
      "childrenCost": 6211
    },
    {
      "id": 198,
      "parentIds": [
        25
      ],
      "name": "Работа 198",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 8627,
      "backwardCost": 340,
      "durationCost": 4130,
      "currentCost": 3590,
      "childrenCost": 7869
    },
    {
      "id": 199,
      "parentIds": [
        17
      ],
      "name": "Работа 199",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 1,
      "forwardCost": 6269,
      "backwardCost": 4416,
      "durationCost": 4309,
      "currentCost": 8012,
      "childrenCost": 891
    },
    {
      "id": 200,
      "parentIds": [
        35
      ],
      "name": "Работа 200",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 5,
      "forwardCost": 7883,
      "backwardCost": 3836,
      "durationCost": 684,
      "currentCost": 6207,
      "childrenCost": 3880
    },
    {
      "id": 201,
      "parentIds": [
        13
      ],
      "name": "Работа 201",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 9,
      "forwardCost": 802,
      "backwardCost": 6796,
      "durationCost": 4669,
      "currentCost": 6909,
      "childrenCost": 8978
    },
    {
      "id": 202,
      "parentIds": [
        24
      ],
      "name": "Работа 202",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 24,
      "forwardCost": 5395,
      "backwardCost": 5428,
      "durationCost": 5025,
      "currentCost": 4980,
      "childrenCost": 3698
    },
    {
      "id": 203,
      "parentIds": [
        23
      ],
      "name": "Работа 203",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 8,
      "forwardCost": 8382,
      "backwardCost": 1312,
      "durationCost": 6667,
      "currentCost": 5597,
      "childrenCost": 467
    },
    {
      "id": 204,
      "parentIds": [
        8
      ],
      "name": "Работа 204",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 25,
      "forwardCost": 2508,
      "backwardCost": 7773,
      "durationCost": 1743,
      "currentCost": 7273,
      "childrenCost": 4477
    },
    {
      "id": 205,
      "parentIds": [
        30
      ],
      "name": "Работа 205",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 24,
      "forwardCost": 8292,
      "backwardCost": 1218,
      "durationCost": 4234,
      "currentCost": 964,
      "childrenCost": 5881
    },
    {
      "id": 206,
      "parentIds": [
        18
      ],
      "name": "Работа 206",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 12,
      "forwardCost": 6611,
      "backwardCost": 933,
      "durationCost": 1624,
      "currentCost": 8232,
      "childrenCost": 2592
    },
    {
      "id": 207,
      "parentIds": [
        29
      ],
      "name": "Работа 207",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 21,
      "forwardCost": 891,
      "backwardCost": 1679,
      "durationCost": 4904,
      "currentCost": 5794,
      "childrenCost": 3870
    },
    {
      "id": 208,
      "parentIds": [
        22
      ],
      "name": "Работа 208",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 17,
      "forwardCost": 1018,
      "backwardCost": 211,
      "durationCost": 8833,
      "currentCost": 7519,
      "childrenCost": 7312
    },
    {
      "id": 209,
      "parentIds": [
        25
      ],
      "name": "Работа 209",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 1,
      "forwardCost": 7152,
      "backwardCost": 3645,
      "durationCost": 1585,
      "currentCost": 6435,
      "childrenCost": 1249
    },
    {
      "id": 210,
      "parentIds": [
        13
      ],
      "name": "Работа 210",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 16,
      "forwardCost": 8223,
      "backwardCost": 259,
      "durationCost": 6729,
      "currentCost": 3431,
      "childrenCost": 1942
    },
    {
      "id": 211,
      "parentIds": [
        23
      ],
      "name": "Работа 211",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 4,
      "forwardCost": 8044,
      "backwardCost": 1783,
      "durationCost": 3519,
      "currentCost": 8263,
      "childrenCost": 6725
    },
    {
      "id": 212,
      "parentIds": [
        14
      ],
      "name": "Работа 212",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 12,
      "forwardCost": 3782,
      "backwardCost": 4141,
      "durationCost": 100,
      "currentCost": 5074,
      "childrenCost": 5620
    },
    {
      "id": 213,
      "parentIds": [
        24
      ],
      "name": "Работа 213",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 12,
      "forwardCost": 6664,
      "backwardCost": 4267,
      "durationCost": 8613,
      "currentCost": 5778,
      "childrenCost": 6793
    },
    {
      "id": 214,
      "parentIds": [
        14
      ],
      "name": "Работа 214",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 18,
      "forwardCost": 4428,
      "backwardCost": 8798,
      "durationCost": 1190,
      "currentCost": 6601,
      "childrenCost": 2205
    },
    {
      "id": 215,
      "parentIds": [
        4
      ],
      "name": "Работа 215",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 19,
      "forwardCost": 6991,
      "backwardCost": 452,
      "durationCost": 4774,
      "currentCost": 8892,
      "childrenCost": 8340
    },
    {
      "id": 216,
      "parentIds": [
        14
      ],
      "name": "Работа 216",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 20,
      "forwardCost": 6239,
      "backwardCost": 5321,
      "durationCost": 2904,
      "currentCost": 4414,
      "childrenCost": 5325
    },
    {
      "id": 217,
      "parentIds": [
        27
      ],
      "name": "Работа 217",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 22,
      "forwardCost": 7992,
      "backwardCost": 610,
      "durationCost": 7642,
      "currentCost": 906,
      "childrenCost": 8967
    },
    {
      "id": 218,
      "parentIds": [
        27
      ],
      "name": "Работа 218",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 16,
      "forwardCost": 1568,
      "backwardCost": 3130,
      "durationCost": 450,
      "currentCost": 8915,
      "childrenCost": 4102
    },
    {
      "id": 219,
      "parentIds": [
        35
      ],
      "name": "Работа 219",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 14,
      "forwardCost": 5689,
      "backwardCost": 631,
      "durationCost": 6539,
      "currentCost": 489,
      "childrenCost": 1969
    },
    {
      "id": 220,
      "parentIds": [
        15
      ],
      "name": "Работа 220",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 10,
      "forwardCost": 7498,
      "backwardCost": 944,
      "durationCost": 2652,
      "currentCost": 5926,
      "childrenCost": 442
    },
    {
      "id": 221,
      "parentIds": [
        25
      ],
      "name": "Работа 221",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 22,
      "forwardCost": 360,
      "backwardCost": 2084,
      "durationCost": 3264,
      "currentCost": 1820,
      "childrenCost": 4410
    },
    {
      "id": 222,
      "parentIds": [
        10
      ],
      "name": "Работа 222",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 4218,
      "backwardCost": 132,
      "durationCost": 1276,
      "currentCost": 3609,
      "childrenCost": 1382
    },
    {
      "id": 223,
      "parentIds": [
        20
      ],
      "name": "Работа 223",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 3,
      "forwardCost": 7948,
      "backwardCost": 3979,
      "durationCost": 8107,
      "currentCost": 637,
      "childrenCost": 1366
    },
    {
      "id": 224,
      "parentIds": [
        5
      ],
      "name": "Работа 224",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 13,
      "forwardCost": 5743,
      "backwardCost": 8166,
      "durationCost": 5712,
      "currentCost": 631,
      "childrenCost": 8578
    },
    {
      "id": 225,
      "parentIds": [
        24
      ],
      "name": "Работа 225",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 18,
      "forwardCost": 4075,
      "backwardCost": 6985,
      "durationCost": 5419,
      "currentCost": 8004,
      "childrenCost": 7017
    },
    {
      "id": 226,
      "parentIds": [
        34
      ],
      "name": "Работа 226",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 16,
      "forwardCost": 895,
      "backwardCost": 6463,
      "durationCost": 7463,
      "currentCost": 6997,
      "childrenCost": 2518
    },
    {
      "id": 227,
      "parentIds": [
        28
      ],
      "name": "Работа 227",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 21,
      "forwardCost": 7928,
      "backwardCost": 5018,
      "durationCost": 8575,
      "currentCost": 6309,
      "childrenCost": 404
    },
    {
      "id": 228,
      "parentIds": [
        32
      ],
      "name": "Работа 228",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 30,
      "forwardCost": 1625,
      "backwardCost": 2236,
      "durationCost": 4692,
      "currentCost": 2458,
      "childrenCost": 6724
    },
    {
      "id": 229,
      "parentIds": [
        15
      ],
      "name": "Работа 229",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 15,
      "forwardCost": 4961,
      "backwardCost": 3660,
      "durationCost": 4181,
      "currentCost": 8475,
      "childrenCost": 3820
    },
    {
      "id": 230,
      "parentIds": [
        23
      ],
      "name": "Работа 230",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 22,
      "forwardCost": 6149,
      "backwardCost": 8329,
      "durationCost": 1583,
      "currentCost": 1439,
      "childrenCost": 5994
    },
    {
      "id": 231,
      "parentIds": [
        24
      ],
      "name": "Работа 231",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 2,
      "forwardCost": 6075,
      "backwardCost": 1852,
      "durationCost": 1914,
      "currentCost": 2728,
      "childrenCost": 2867
    },
    {
      "id": 232,
      "parentIds": [
        31
      ],
      "name": "Работа 232",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 7,
      "forwardCost": 6176,
      "backwardCost": 430,
      "durationCost": 3923,
      "currentCost": 2790,
      "childrenCost": 2389
    },
    {
      "id": 233,
      "parentIds": [
        23
      ],
      "name": "Работа 233",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 26,
      "forwardCost": 5525,
      "backwardCost": 1240,
      "durationCost": 383,
      "currentCost": 2524,
      "childrenCost": 2405
    },
    {
      "id": 234,
      "parentIds": [
        30
      ],
      "name": "Работа 234",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 18,
      "forwardCost": 3379,
      "backwardCost": 2866,
      "durationCost": 1858,
      "currentCost": 4388,
      "childrenCost": 4691
    },
    {
      "id": 235,
      "parentIds": [
        33
      ],
      "name": "Работа 235",
      "startDate": "2020-11-14T00:49:48.788Z",
      "duration": 7,
      "minDuration": 4,
      "forwardCost": 2969,
      "backwardCost": 7438,
      "durationCost": 400,
      "currentCost": 2196,
      "childrenCost": 7970
    },
    {
      "id": 236,
      "parentIds": [
        88
      ],
      "name": "Работа 236",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 4,
      "forwardCost": 2507,
      "backwardCost": 6576,
      "durationCost": 6236,
      "currentCost": 6585,
      "childrenCost": 4259
    },
    {
      "id": 237,
      "parentIds": [
        227
      ],
      "name": "Работа 237",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 27,
      "forwardCost": 4197,
      "backwardCost": 1884,
      "durationCost": 8933,
      "currentCost": 4937,
      "childrenCost": 3674
    },
    {
      "id": 238,
      "parentIds": [
        85
      ],
      "name": "Работа 238",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 18,
      "forwardCost": 713,
      "backwardCost": 8273,
      "durationCost": 1213,
      "currentCost": 3484,
      "childrenCost": 1989
    },
    {
      "id": 239,
      "parentIds": [
        41
      ],
      "name": "Работа 239",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 23,
      "forwardCost": 8138,
      "backwardCost": 2670,
      "durationCost": 8051,
      "currentCost": 3009,
      "childrenCost": 1869
    },
    {
      "id": 240,
      "parentIds": [
        102
      ],
      "name": "Работа 240",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 19,
      "forwardCost": 8010,
      "backwardCost": 8459,
      "durationCost": 3530,
      "currentCost": 3320,
      "childrenCost": 1909
    },
    {
      "id": 241,
      "parentIds": [
        105
      ],
      "name": "Работа 241",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 18,
      "forwardCost": 4276,
      "backwardCost": 648,
      "durationCost": 2084,
      "currentCost": 7711,
      "childrenCost": 4440
    },
    {
      "id": 242,
      "parentIds": [
        204
      ],
      "name": "Работа 242",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 8,
      "forwardCost": 1766,
      "backwardCost": 8358,
      "durationCost": 3152,
      "currentCost": 5222,
      "childrenCost": 5800
    },
    {
      "id": 243,
      "parentIds": [
        93
      ],
      "name": "Работа 243",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 23,
      "forwardCost": 2460,
      "backwardCost": 983,
      "durationCost": 4835,
      "currentCost": 3664,
      "childrenCost": 6632
    },
    {
      "id": 244,
      "parentIds": [
        62
      ],
      "name": "Работа 244",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 8,
      "forwardCost": 8983,
      "backwardCost": 5942,
      "durationCost": 8681,
      "currentCost": 981,
      "childrenCost": 6346
    },
    {
      "id": 245,
      "parentIds": [
        73
      ],
      "name": "Работа 245",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 16,
      "forwardCost": 8473,
      "backwardCost": 7555,
      "durationCost": 673,
      "currentCost": 4477,
      "childrenCost": 5473
    },
    {
      "id": 246,
      "parentIds": [
        229
      ],
      "name": "Работа 246",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 15,
      "forwardCost": 5235,
      "backwardCost": 932,
      "durationCost": 7165,
      "currentCost": 3412,
      "childrenCost": 7521
    },
    {
      "id": 247,
      "parentIds": [
        115
      ],
      "name": "Работа 247",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 8,
      "forwardCost": 6363,
      "backwardCost": 5226,
      "durationCost": 7914,
      "currentCost": 591,
      "childrenCost": 7476
    },
    {
      "id": 248,
      "parentIds": [
        214
      ],
      "name": "Работа 248",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 20,
      "forwardCost": 2851,
      "backwardCost": 4269,
      "durationCost": 2272,
      "currentCost": 386,
      "childrenCost": 3349
    },
    {
      "id": 249,
      "parentIds": [
        200
      ],
      "name": "Работа 249",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 25,
      "forwardCost": 6217,
      "backwardCost": 8133,
      "durationCost": 6188,
      "currentCost": 7049,
      "childrenCost": 7723
    },
    {
      "id": 250,
      "parentIds": [
        158
      ],
      "name": "Работа 250",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 13,
      "forwardCost": 3316,
      "backwardCost": 7596,
      "durationCost": 3245,
      "currentCost": 3153,
      "childrenCost": 6147
    },
    {
      "id": 251,
      "parentIds": [
        182
      ],
      "name": "Работа 251",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 26,
      "forwardCost": 3103,
      "backwardCost": 4489,
      "durationCost": 1039,
      "currentCost": 5877,
      "childrenCost": 243
    },
    {
      "id": 252,
      "parentIds": [
        101
      ],
      "name": "Работа 252",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 11,
      "forwardCost": 951,
      "backwardCost": 1447,
      "durationCost": 4153,
      "currentCost": 4248,
      "childrenCost": 523
    },
    {
      "id": 253,
      "parentIds": [
        174
      ],
      "name": "Работа 253",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 26,
      "forwardCost": 1033,
      "backwardCost": 5550,
      "durationCost": 1090,
      "currentCost": 7646,
      "childrenCost": 2484
    },
    {
      "id": 254,
      "parentIds": [
        67
      ],
      "name": "Работа 254",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 24,
      "forwardCost": 7309,
      "backwardCost": 498,
      "durationCost": 1227,
      "currentCost": 8389,
      "childrenCost": 6701
    },
    {
      "id": 255,
      "parentIds": [
        72
      ],
      "name": "Работа 255",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 3,
      "forwardCost": 2053,
      "backwardCost": 1435,
      "durationCost": 6890,
      "currentCost": 7897,
      "childrenCost": 1218
    },
    {
      "id": 256,
      "parentIds": [
        155
      ],
      "name": "Работа 256",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 4812,
      "backwardCost": 2849,
      "durationCost": 1507,
      "currentCost": 5492,
      "childrenCost": 287
    },
    {
      "id": 257,
      "parentIds": [
        68
      ],
      "name": "Работа 257",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 18,
      "forwardCost": 2556,
      "backwardCost": 1375,
      "durationCost": 4544,
      "currentCost": 2607,
      "childrenCost": 5618
    },
    {
      "id": 258,
      "parentIds": [
        220
      ],
      "name": "Работа 258",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 17,
      "forwardCost": 3388,
      "backwardCost": 6405,
      "durationCost": 8882,
      "currentCost": 1685,
      "childrenCost": 2137
    },
    {
      "id": 259,
      "parentIds": [
        86
      ],
      "name": "Работа 259",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 6889,
      "backwardCost": 8176,
      "durationCost": 1538,
      "currentCost": 6373,
      "childrenCost": 2148
    },
    {
      "id": 260,
      "parentIds": [
        133
      ],
      "name": "Работа 260",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 5627,
      "backwardCost": 5127,
      "durationCost": 280,
      "currentCost": 6973,
      "childrenCost": 8404
    },
    {
      "id": 261,
      "parentIds": [
        207
      ],
      "name": "Работа 261",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 30,
      "forwardCost": 6774,
      "backwardCost": 4964,
      "durationCost": 4584,
      "currentCost": 2912,
      "childrenCost": 269
    },
    {
      "id": 262,
      "parentIds": [
        230
      ],
      "name": "Работа 262",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 10,
      "forwardCost": 1575,
      "backwardCost": 7519,
      "durationCost": 3926,
      "currentCost": 5067,
      "childrenCost": 7870
    },
    {
      "id": 263,
      "parentIds": [
        101
      ],
      "name": "Работа 263",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 3791,
      "backwardCost": 6663,
      "durationCost": 7442,
      "currentCost": 6874,
      "childrenCost": 2326
    },
    {
      "id": 264,
      "parentIds": [
        40
      ],
      "name": "Работа 264",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 10,
      "forwardCost": 1982,
      "backwardCost": 6521,
      "durationCost": 3612,
      "currentCost": 1729,
      "childrenCost": 2153
    },
    {
      "id": 265,
      "parentIds": [
        198
      ],
      "name": "Работа 265",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 6,
      "forwardCost": 5299,
      "backwardCost": 4657,
      "durationCost": 6450,
      "currentCost": 8978,
      "childrenCost": 8253
    },
    {
      "id": 266,
      "parentIds": [
        91
      ],
      "name": "Работа 266",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 14,
      "forwardCost": 8937,
      "backwardCost": 3310,
      "durationCost": 1950,
      "currentCost": 6435,
      "childrenCost": 1242
    },
    {
      "id": 267,
      "parentIds": [
        69
      ],
      "name": "Работа 267",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 9,
      "forwardCost": 5593,
      "backwardCost": 4005,
      "durationCost": 4444,
      "currentCost": 6513,
      "childrenCost": 8489
    },
    {
      "id": 268,
      "parentIds": [
        230
      ],
      "name": "Работа 268",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 30,
      "forwardCost": 2306,
      "backwardCost": 2192,
      "durationCost": 4463,
      "currentCost": 1640,
      "childrenCost": 4322
    },
    {
      "id": 269,
      "parentIds": [
        209
      ],
      "name": "Работа 269",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 27,
      "forwardCost": 1001,
      "backwardCost": 4453,
      "durationCost": 3459,
      "currentCost": 6473,
      "childrenCost": 7875
    },
    {
      "id": 270,
      "parentIds": [
        37
      ],
      "name": "Работа 270",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 5,
      "forwardCost": 6332,
      "backwardCost": 2984,
      "durationCost": 382,
      "currentCost": 889,
      "childrenCost": 2598
    },
    {
      "id": 271,
      "parentIds": [
        231
      ],
      "name": "Работа 271",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 3,
      "forwardCost": 2242,
      "backwardCost": 5465,
      "durationCost": 7811,
      "currentCost": 3047,
      "childrenCost": 7588
    },
    {
      "id": 272,
      "parentIds": [
        208
      ],
      "name": "Работа 272",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 17,
      "forwardCost": 2884,
      "backwardCost": 6011,
      "durationCost": 2331,
      "currentCost": 8100,
      "childrenCost": 122
    },
    {
      "id": 273,
      "parentIds": [
        188
      ],
      "name": "Работа 273",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 6,
      "forwardCost": 4542,
      "backwardCost": 6704,
      "durationCost": 4039,
      "currentCost": 7619,
      "childrenCost": 561
    },
    {
      "id": 274,
      "parentIds": [
        203
      ],
      "name": "Работа 274",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 5,
      "forwardCost": 3574,
      "backwardCost": 2680,
      "durationCost": 8571,
      "currentCost": 4074,
      "childrenCost": 4447
    },
    {
      "id": 275,
      "parentIds": [
        124
      ],
      "name": "Работа 275",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 5,
      "forwardCost": 1214,
      "backwardCost": 3601,
      "durationCost": 7027,
      "currentCost": 6304,
      "childrenCost": 7182
    },
    {
      "id": 276,
      "parentIds": [
        174
      ],
      "name": "Работа 276",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 5,
      "forwardCost": 6174,
      "backwardCost": 1571,
      "durationCost": 4673,
      "currentCost": 3560,
      "childrenCost": 2337
    },
    {
      "id": 277,
      "parentIds": [
        110
      ],
      "name": "Работа 277",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 25,
      "forwardCost": 4139,
      "backwardCost": 2023,
      "durationCost": 4861,
      "currentCost": 7969,
      "childrenCost": 4632
    },
    {
      "id": 278,
      "parentIds": [
        176
      ],
      "name": "Работа 278",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 27,
      "forwardCost": 8915,
      "backwardCost": 5485,
      "durationCost": 4029,
      "currentCost": 2640,
      "childrenCost": 6042
    },
    {
      "id": 279,
      "parentIds": [
        171
      ],
      "name": "Работа 279",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 25,
      "forwardCost": 512,
      "backwardCost": 5243,
      "durationCost": 1326,
      "currentCost": 3277,
      "childrenCost": 768
    },
    {
      "id": 280,
      "parentIds": [
        70
      ],
      "name": "Работа 280",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 15,
      "forwardCost": 4918,
      "backwardCost": 5416,
      "durationCost": 2432,
      "currentCost": 8191,
      "childrenCost": 7572
    },
    {
      "id": 281,
      "parentIds": [
        132
      ],
      "name": "Работа 281",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 13,
      "forwardCost": 5483,
      "backwardCost": 139,
      "durationCost": 8513,
      "currentCost": 2177,
      "childrenCost": 8368
    },
    {
      "id": 282,
      "parentIds": [
        207
      ],
      "name": "Работа 282",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 8846,
      "backwardCost": 444,
      "durationCost": 258,
      "currentCost": 2431,
      "childrenCost": 1970
    },
    {
      "id": 283,
      "parentIds": [
        183
      ],
      "name": "Работа 283",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 2,
      "forwardCost": 1342,
      "backwardCost": 1003,
      "durationCost": 4788,
      "currentCost": 7939,
      "childrenCost": 6738
    },
    {
      "id": 284,
      "parentIds": [
        94
      ],
      "name": "Работа 284",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 14,
      "forwardCost": 3909,
      "backwardCost": 8244,
      "durationCost": 7116,
      "currentCost": 1427,
      "childrenCost": 1284
    },
    {
      "id": 285,
      "parentIds": [
        119
      ],
      "name": "Работа 285",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 20,
      "forwardCost": 7455,
      "backwardCost": 5353,
      "durationCost": 5562,
      "currentCost": 4421,
      "childrenCost": 3353
    },
    {
      "id": 286,
      "parentIds": [
        100
      ],
      "name": "Работа 286",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 29,
      "forwardCost": 2860,
      "backwardCost": 7290,
      "durationCost": 3479,
      "currentCost": 1725,
      "childrenCost": 949
    },
    {
      "id": 287,
      "parentIds": [
        92
      ],
      "name": "Работа 287",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 27,
      "forwardCost": 2995,
      "backwardCost": 1634,
      "durationCost": 8068,
      "currentCost": 3768,
      "childrenCost": 7115
    },
    {
      "id": 288,
      "parentIds": [
        214
      ],
      "name": "Работа 288",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 16,
      "forwardCost": 8079,
      "backwardCost": 958,
      "durationCost": 2471,
      "currentCost": 7957,
      "childrenCost": 4291
    },
    {
      "id": 289,
      "parentIds": [
        130
      ],
      "name": "Работа 289",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 2,
      "forwardCost": 8082,
      "backwardCost": 2432,
      "durationCost": 4947,
      "currentCost": 211,
      "childrenCost": 6834
    },
    {
      "id": 290,
      "parentIds": [
        67
      ],
      "name": "Работа 290",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 23,
      "forwardCost": 6852,
      "backwardCost": 4881,
      "durationCost": 525,
      "currentCost": 7265,
      "childrenCost": 5232
    },
    {
      "id": 291,
      "parentIds": [
        179
      ],
      "name": "Работа 291",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 28,
      "forwardCost": 8282,
      "backwardCost": 593,
      "durationCost": 536,
      "currentCost": 3658,
      "childrenCost": 1963
    },
    {
      "id": 292,
      "parentIds": [
        187
      ],
      "name": "Работа 292",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 19,
      "forwardCost": 356,
      "backwardCost": 2377,
      "durationCost": 3647,
      "currentCost": 8319,
      "childrenCost": 535
    },
    {
      "id": 293,
      "parentIds": [
        224
      ],
      "name": "Работа 293",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 27,
      "forwardCost": 1728,
      "backwardCost": 3517,
      "durationCost": 5806,
      "currentCost": 3077,
      "childrenCost": 8623
    },
    {
      "id": 294,
      "parentIds": [
        213
      ],
      "name": "Работа 294",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 25,
      "forwardCost": 3317,
      "backwardCost": 219,
      "durationCost": 1775,
      "currentCost": 3930,
      "childrenCost": 3171
    },
    {
      "id": 295,
      "parentIds": [
        185
      ],
      "name": "Работа 295",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 24,
      "forwardCost": 4407,
      "backwardCost": 1663,
      "durationCost": 8470,
      "currentCost": 6844,
      "childrenCost": 2361
    },
    {
      "id": 296,
      "parentIds": [
        89
      ],
      "name": "Работа 296",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 3,
      "forwardCost": 3023,
      "backwardCost": 8526,
      "durationCost": 5721,
      "currentCost": 8967,
      "childrenCost": 727
    },
    {
      "id": 297,
      "parentIds": [
        149
      ],
      "name": "Работа 297",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 4914,
      "backwardCost": 6209,
      "durationCost": 6756,
      "currentCost": 8911,
      "childrenCost": 6968
    },
    {
      "id": 298,
      "parentIds": [
        123
      ],
      "name": "Работа 298",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 9,
      "forwardCost": 2046,
      "backwardCost": 7092,
      "durationCost": 925,
      "currentCost": 560,
      "childrenCost": 1353
    },
    {
      "id": 299,
      "parentIds": [
        123
      ],
      "name": "Работа 299",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 8,
      "forwardCost": 1775,
      "backwardCost": 4335,
      "durationCost": 6520,
      "currentCost": 4183,
      "childrenCost": 7819
    },
    {
      "id": 300,
      "parentIds": [
        41
      ],
      "name": "Работа 300",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 24,
      "forwardCost": 7319,
      "backwardCost": 1757,
      "durationCost": 2567,
      "currentCost": 4330,
      "childrenCost": 3660
    },
    {
      "id": 301,
      "parentIds": [
        54
      ],
      "name": "Работа 301",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 20,
      "forwardCost": 4398,
      "backwardCost": 7580,
      "durationCost": 848,
      "currentCost": 7996,
      "childrenCost": 3468
    },
    {
      "id": 302,
      "parentIds": [
        145
      ],
      "name": "Работа 302",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 19,
      "forwardCost": 6343,
      "backwardCost": 6709,
      "durationCost": 1594,
      "currentCost": 8486,
      "childrenCost": 7408
    },
    {
      "id": 303,
      "parentIds": [
        141
      ],
      "name": "Работа 303",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 8749,
      "backwardCost": 2187,
      "durationCost": 5628,
      "currentCost": 875,
      "childrenCost": 663
    },
    {
      "id": 304,
      "parentIds": [
        131
      ],
      "name": "Работа 304",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 12,
      "forwardCost": 8152,
      "backwardCost": 6168,
      "durationCost": 753,
      "currentCost": 7565,
      "childrenCost": 8586
    },
    {
      "id": 305,
      "parentIds": [
        51
      ],
      "name": "Работа 305",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 23,
      "forwardCost": 5104,
      "backwardCost": 130,
      "durationCost": 2432,
      "currentCost": 206,
      "childrenCost": 2590
    },
    {
      "id": 306,
      "parentIds": [
        102
      ],
      "name": "Работа 306",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 22,
      "forwardCost": 6197,
      "backwardCost": 6605,
      "durationCost": 8574,
      "currentCost": 6740,
      "childrenCost": 7671
    },
    {
      "id": 307,
      "parentIds": [
        111
      ],
      "name": "Работа 307",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 13,
      "forwardCost": 3171,
      "backwardCost": 1168,
      "durationCost": 3194,
      "currentCost": 7839,
      "childrenCost": 5133
    },
    {
      "id": 308,
      "parentIds": [
        74
      ],
      "name": "Работа 308",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 13,
      "forwardCost": 4596,
      "backwardCost": 4550,
      "durationCost": 5389,
      "currentCost": 2244,
      "childrenCost": 6442
    },
    {
      "id": 309,
      "parentIds": [
        164
      ],
      "name": "Работа 309",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 27,
      "forwardCost": 5411,
      "backwardCost": 3766,
      "durationCost": 2851,
      "currentCost": 947,
      "childrenCost": 2897
    },
    {
      "id": 310,
      "parentIds": [
        176
      ],
      "name": "Работа 310",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 18,
      "forwardCost": 8678,
      "backwardCost": 1007,
      "durationCost": 5560,
      "currentCost": 3777,
      "childrenCost": 3691
    },
    {
      "id": 311,
      "parentIds": [
        153
      ],
      "name": "Работа 311",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 23,
      "forwardCost": 288,
      "backwardCost": 8641,
      "durationCost": 8138,
      "currentCost": 5738,
      "childrenCost": 5074
    },
    {
      "id": 312,
      "parentIds": [
        80
      ],
      "name": "Работа 312",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 5,
      "forwardCost": 930,
      "backwardCost": 3114,
      "durationCost": 1281,
      "currentCost": 5091,
      "childrenCost": 950
    },
    {
      "id": 313,
      "parentIds": [
        195
      ],
      "name": "Работа 313",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 16,
      "forwardCost": 7496,
      "backwardCost": 4566,
      "durationCost": 6592,
      "currentCost": 2572,
      "childrenCost": 8574
    },
    {
      "id": 314,
      "parentIds": [
        128
      ],
      "name": "Работа 314",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 10,
      "forwardCost": 8297,
      "backwardCost": 4625,
      "durationCost": 7496,
      "currentCost": 4730,
      "childrenCost": 8519
    },
    {
      "id": 315,
      "parentIds": [
        182
      ],
      "name": "Работа 315",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 24,
      "forwardCost": 1568,
      "backwardCost": 2035,
      "durationCost": 229,
      "currentCost": 8659,
      "childrenCost": 3239
    },
    {
      "id": 316,
      "parentIds": [
        120
      ],
      "name": "Работа 316",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 19,
      "forwardCost": 5268,
      "backwardCost": 1447,
      "durationCost": 3003,
      "currentCost": 8581,
      "childrenCost": 1708
    },
    {
      "id": 317,
      "parentIds": [
        166
      ],
      "name": "Работа 317",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 4,
      "forwardCost": 992,
      "backwardCost": 1238,
      "durationCost": 832,
      "currentCost": 1098,
      "childrenCost": 4062
    },
    {
      "id": 318,
      "parentIds": [
        47
      ],
      "name": "Работа 318",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 14,
      "forwardCost": 677,
      "backwardCost": 1678,
      "durationCost": 3245,
      "currentCost": 3613,
      "childrenCost": 194
    },
    {
      "id": 319,
      "parentIds": [
        54
      ],
      "name": "Работа 319",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 4,
      "forwardCost": 2429,
      "backwardCost": 3315,
      "durationCost": 7195,
      "currentCost": 1035,
      "childrenCost": 2103
    },
    {
      "id": 320,
      "parentIds": [
        118
      ],
      "name": "Работа 320",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 1,
      "forwardCost": 5452,
      "backwardCost": 4867,
      "durationCost": 3949,
      "currentCost": 1687,
      "childrenCost": 4417
    },
    {
      "id": 321,
      "parentIds": [
        235
      ],
      "name": "Работа 321",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 8,
      "forwardCost": 8731,
      "backwardCost": 5486,
      "durationCost": 2503,
      "currentCost": 5865,
      "childrenCost": 3699
    },
    {
      "id": 322,
      "parentIds": [
        123
      ],
      "name": "Работа 322",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 23,
      "forwardCost": 158,
      "backwardCost": 7846,
      "durationCost": 3782,
      "currentCost": 3300,
      "childrenCost": 2967
    },
    {
      "id": 323,
      "parentIds": [
        163
      ],
      "name": "Работа 323",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 1,
      "forwardCost": 1575,
      "backwardCost": 8563,
      "durationCost": 6877,
      "currentCost": 5606,
      "childrenCost": 7776
    },
    {
      "id": 324,
      "parentIds": [
        156
      ],
      "name": "Работа 324",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 13,
      "forwardCost": 1356,
      "backwardCost": 7015,
      "durationCost": 1842,
      "currentCost": 7837,
      "childrenCost": 8721
    },
    {
      "id": 325,
      "parentIds": [
        96
      ],
      "name": "Работа 325",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 22,
      "forwardCost": 6692,
      "backwardCost": 5670,
      "durationCost": 8762,
      "currentCost": 3660,
      "childrenCost": 3793
    },
    {
      "id": 326,
      "parentIds": [
        118
      ],
      "name": "Работа 326",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 6,
      "forwardCost": 7556,
      "backwardCost": 7955,
      "durationCost": 2895,
      "currentCost": 1222,
      "childrenCost": 5296
    },
    {
      "id": 327,
      "parentIds": [
        219
      ],
      "name": "Работа 327",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 1,
      "forwardCost": 155,
      "backwardCost": 1518,
      "durationCost": 3440,
      "currentCost": 5029,
      "childrenCost": 3941
    },
    {
      "id": 328,
      "parentIds": [
        68
      ],
      "name": "Работа 328",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 16,
      "forwardCost": 5832,
      "backwardCost": 5342,
      "durationCost": 6158,
      "currentCost": 7118,
      "childrenCost": 3140
    },
    {
      "id": 329,
      "parentIds": [
        147
      ],
      "name": "Работа 329",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 16,
      "forwardCost": 4684,
      "backwardCost": 3303,
      "durationCost": 550,
      "currentCost": 4427,
      "childrenCost": 2822
    },
    {
      "id": 330,
      "parentIds": [
        139
      ],
      "name": "Работа 330",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 26,
      "forwardCost": 3963,
      "backwardCost": 2625,
      "durationCost": 4951,
      "currentCost": 7225,
      "childrenCost": 2158
    },
    {
      "id": 331,
      "parentIds": [
        91
      ],
      "name": "Работа 331",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 8,
      "forwardCost": 8000,
      "backwardCost": 6653,
      "durationCost": 8835,
      "currentCost": 152,
      "childrenCost": 5928
    },
    {
      "id": 332,
      "parentIds": [
        113
      ],
      "name": "Работа 332",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 21,
      "forwardCost": 2825,
      "backwardCost": 1472,
      "durationCost": 2795,
      "currentCost": 7628,
      "childrenCost": 4956
    },
    {
      "id": 333,
      "parentIds": [
        111
      ],
      "name": "Работа 333",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 12,
      "forwardCost": 4385,
      "backwardCost": 7635,
      "durationCost": 6186,
      "currentCost": 4455,
      "childrenCost": 2913
    },
    {
      "id": 334,
      "parentIds": [
        186
      ],
      "name": "Работа 334",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 15,
      "forwardCost": 1028,
      "backwardCost": 1891,
      "durationCost": 4836,
      "currentCost": 5717,
      "childrenCost": 1429
    },
    {
      "id": 335,
      "parentIds": [
        42
      ],
      "name": "Работа 335",
      "startDate": "2020-11-14T00:52:45.901Z",
      "duration": 2,
      "minDuration": 7,
      "forwardCost": 7143,
      "backwardCost": 1549,
      "durationCost": 5397,
      "currentCost": 3743,
      "childrenCost": 7104
    },
    {
      "id": 336,
      "parentIds": [
        127
      ],
      "name": "Работа 336",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 5074,
      "backwardCost": 5525,
      "durationCost": 8698,
      "currentCost": 2541,
      "childrenCost": 5965
    },
    {
      "id": 337,
      "parentIds": [
        168
      ],
      "name": "Работа 337",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 3506,
      "backwardCost": 1447,
      "durationCost": 7226,
      "currentCost": 3575,
      "childrenCost": 3385
    },
    {
      "id": 338,
      "parentIds": [
        54
      ],
      "name": "Работа 338",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 6578,
      "backwardCost": 2502,
      "durationCost": 7432,
      "currentCost": 3423,
      "childrenCost": 614
    },
    {
      "id": 339,
      "parentIds": [
        49
      ],
      "name": "Работа 339",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 2490,
      "backwardCost": 6633,
      "durationCost": 8211,
      "currentCost": 2121,
      "childrenCost": 1975
    },
    {
      "id": 340,
      "parentIds": [
        46
      ],
      "name": "Работа 340",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 18,
      "forwardCost": 433,
      "backwardCost": 8171,
      "durationCost": 6999,
      "currentCost": 3931,
      "childrenCost": 4686
    },
    {
      "id": 341,
      "parentIds": [
        127
      ],
      "name": "Работа 341",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 3759,
      "backwardCost": 4943,
      "durationCost": 6758,
      "currentCost": 297,
      "childrenCost": 796
    },
    {
      "id": 342,
      "parentIds": [
        45
      ],
      "name": "Работа 342",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 5166,
      "backwardCost": 3755,
      "durationCost": 8537,
      "currentCost": 3685,
      "childrenCost": 1287
    },
    {
      "id": 343,
      "parentIds": [
        137
      ],
      "name": "Работа 343",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 5130,
      "backwardCost": 4631,
      "durationCost": 438,
      "currentCost": 1813,
      "childrenCost": 6839
    },
    {
      "id": 344,
      "parentIds": [
        175
      ],
      "name": "Работа 344",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 13,
      "forwardCost": 7496,
      "backwardCost": 651,
      "durationCost": 2711,
      "currentCost": 8481,
      "childrenCost": 5776
    },
    {
      "id": 345,
      "parentIds": [
        151
      ],
      "name": "Работа 345",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 3576,
      "backwardCost": 5195,
      "durationCost": 8559,
      "currentCost": 3138,
      "childrenCost": 8343
    },
    {
      "id": 346,
      "parentIds": [
        109
      ],
      "name": "Работа 346",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 5657,
      "backwardCost": 6035,
      "durationCost": 4225,
      "currentCost": 1557,
      "childrenCost": 5891
    },
    {
      "id": 347,
      "parentIds": [
        127
      ],
      "name": "Работа 347",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 23,
      "forwardCost": 214,
      "backwardCost": 2853,
      "durationCost": 8669,
      "currentCost": 228,
      "childrenCost": 7140
    },
    {
      "id": 348,
      "parentIds": [
        115
      ],
      "name": "Работа 348",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 468,
      "backwardCost": 8630,
      "durationCost": 6462,
      "currentCost": 6249,
      "childrenCost": 6188
    },
    {
      "id": 349,
      "parentIds": [
        54
      ],
      "name": "Работа 349",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 3007,
      "backwardCost": 8800,
      "durationCost": 8118,
      "currentCost": 4026,
      "childrenCost": 7100
    },
    {
      "id": 350,
      "parentIds": [
        231
      ],
      "name": "Работа 350",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 7825,
      "backwardCost": 7544,
      "durationCost": 3970,
      "currentCost": 5013,
      "childrenCost": 5824
    },
    {
      "id": 351,
      "parentIds": [
        174
      ],
      "name": "Работа 351",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 3178,
      "backwardCost": 4945,
      "durationCost": 3706,
      "currentCost": 1873,
      "childrenCost": 2855
    },
    {
      "id": 352,
      "parentIds": [
        133
      ],
      "name": "Работа 352",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 12,
      "forwardCost": 2413,
      "backwardCost": 3247,
      "durationCost": 1787,
      "currentCost": 5215,
      "childrenCost": 7066
    },
    {
      "id": 353,
      "parentIds": [
        45
      ],
      "name": "Работа 353",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 8390,
      "backwardCost": 7005,
      "durationCost": 3066,
      "currentCost": 5889,
      "childrenCost": 6243
    },
    {
      "id": 354,
      "parentIds": [
        171
      ],
      "name": "Работа 354",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 919,
      "backwardCost": 6419,
      "durationCost": 4373,
      "currentCost": 2212,
      "childrenCost": 1732
    },
    {
      "id": 355,
      "parentIds": [
        194
      ],
      "name": "Работа 355",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 28,
      "forwardCost": 6805,
      "backwardCost": 4161,
      "durationCost": 6576,
      "currentCost": 7839,
      "childrenCost": 535
    },
    {
      "id": 356,
      "parentIds": [
        211
      ],
      "name": "Работа 356",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 16,
      "forwardCost": 595,
      "backwardCost": 2547,
      "durationCost": 5091,
      "currentCost": 2495,
      "childrenCost": 6291
    },
    {
      "id": 357,
      "parentIds": [
        97
      ],
      "name": "Работа 357",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 7554,
      "backwardCost": 5432,
      "durationCost": 3808,
      "currentCost": 4212,
      "childrenCost": 3427
    },
    {
      "id": 358,
      "parentIds": [
        96
      ],
      "name": "Работа 358",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 1,
      "forwardCost": 2650,
      "backwardCost": 176,
      "durationCost": 904,
      "currentCost": 4613,
      "childrenCost": 8773
    },
    {
      "id": 359,
      "parentIds": [
        143
      ],
      "name": "Работа 359",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 6,
      "forwardCost": 5516,
      "backwardCost": 8769,
      "durationCost": 4612,
      "currentCost": 6596,
      "childrenCost": 8064
    },
    {
      "id": 360,
      "parentIds": [
        56
      ],
      "name": "Работа 360",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 10,
      "forwardCost": 3470,
      "backwardCost": 6058,
      "durationCost": 784,
      "currentCost": 302,
      "childrenCost": 8624
    },
    {
      "id": 361,
      "parentIds": [
        134
      ],
      "name": "Работа 361",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 18,
      "forwardCost": 4951,
      "backwardCost": 1058,
      "durationCost": 8341,
      "currentCost": 1446,
      "childrenCost": 367
    },
    {
      "id": 362,
      "parentIds": [
        174
      ],
      "name": "Работа 362",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 9,
      "forwardCost": 1624,
      "backwardCost": 7045,
      "durationCost": 8819,
      "currentCost": 8270,
      "childrenCost": 1016
    },
    {
      "id": 363,
      "parentIds": [
        156
      ],
      "name": "Работа 363",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 1046,
      "backwardCost": 6371,
      "durationCost": 1738,
      "currentCost": 323,
      "childrenCost": 902
    },
    {
      "id": 364,
      "parentIds": [
        147
      ],
      "name": "Работа 364",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 27,
      "forwardCost": 5431,
      "backwardCost": 6515,
      "durationCost": 3362,
      "currentCost": 2867,
      "childrenCost": 7311
    },
    {
      "id": 365,
      "parentIds": [
        42
      ],
      "name": "Работа 365",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 4979,
      "backwardCost": 1932,
      "durationCost": 5315,
      "currentCost": 7178,
      "childrenCost": 7109
    },
    {
      "id": 366,
      "parentIds": [
        99
      ],
      "name": "Работа 366",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 13,
      "forwardCost": 8951,
      "backwardCost": 3442,
      "durationCost": 1038,
      "currentCost": 1352,
      "childrenCost": 6604
    },
    {
      "id": 367,
      "parentIds": [
        155
      ],
      "name": "Работа 367",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 24,
      "forwardCost": 7147,
      "backwardCost": 631,
      "durationCost": 2921,
      "currentCost": 7098,
      "childrenCost": 7397
    },
    {
      "id": 368,
      "parentIds": [
        197
      ],
      "name": "Работа 368",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 15,
      "forwardCost": 8632,
      "backwardCost": 8801,
      "durationCost": 2253,
      "currentCost": 4830,
      "childrenCost": 8177
    },
    {
      "id": 369,
      "parentIds": [
        146
      ],
      "name": "Работа 369",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 5180,
      "backwardCost": 3304,
      "durationCost": 2025,
      "currentCost": 5586,
      "childrenCost": 5089
    },
    {
      "id": 370,
      "parentIds": [
        92
      ],
      "name": "Работа 370",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 25,
      "forwardCost": 8179,
      "backwardCost": 5548,
      "durationCost": 8974,
      "currentCost": 579,
      "childrenCost": 2088
    },
    {
      "id": 371,
      "parentIds": [
        130
      ],
      "name": "Работа 371",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 905,
      "backwardCost": 6281,
      "durationCost": 5981,
      "currentCost": 8024,
      "childrenCost": 4623
    },
    {
      "id": 372,
      "parentIds": [
        61
      ],
      "name": "Работа 372",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 6148,
      "backwardCost": 2692,
      "durationCost": 7543,
      "currentCost": 536,
      "childrenCost": 6149
    },
    {
      "id": 373,
      "parentIds": [
        197
      ],
      "name": "Работа 373",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 26,
      "forwardCost": 6707,
      "backwardCost": 936,
      "durationCost": 3840,
      "currentCost": 6851,
      "childrenCost": 2482
    },
    {
      "id": 374,
      "parentIds": [
        155
      ],
      "name": "Работа 374",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 14,
      "forwardCost": 1209,
      "backwardCost": 8907,
      "durationCost": 6736,
      "currentCost": 5751,
      "childrenCost": 5146
    },
    {
      "id": 375,
      "parentIds": [
        230
      ],
      "name": "Работа 375",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 827,
      "backwardCost": 1338,
      "durationCost": 8010,
      "currentCost": 1260,
      "childrenCost": 6047
    },
    {
      "id": 376,
      "parentIds": [
        87
      ],
      "name": "Работа 376",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 3451,
      "backwardCost": 2071,
      "durationCost": 5594,
      "currentCost": 7100,
      "childrenCost": 5163
    },
    {
      "id": 377,
      "parentIds": [
        125
      ],
      "name": "Работа 377",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 24,
      "forwardCost": 4935,
      "backwardCost": 4997,
      "durationCost": 4545,
      "currentCost": 7135,
      "childrenCost": 501
    },
    {
      "id": 378,
      "parentIds": [
        54
      ],
      "name": "Работа 378",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 27,
      "forwardCost": 3908,
      "backwardCost": 3558,
      "durationCost": 5437,
      "currentCost": 7691,
      "childrenCost": 3894
    },
    {
      "id": 379,
      "parentIds": [
        69
      ],
      "name": "Работа 379",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 8980,
      "backwardCost": 1488,
      "durationCost": 2296,
      "currentCost": 5866,
      "childrenCost": 5182
    },
    {
      "id": 380,
      "parentIds": [
        93
      ],
      "name": "Работа 380",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 8028,
      "backwardCost": 534,
      "durationCost": 4097,
      "currentCost": 7555,
      "childrenCost": 1197
    },
    {
      "id": 381,
      "parentIds": [
        195
      ],
      "name": "Работа 381",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 6,
      "forwardCost": 5186,
      "backwardCost": 4223,
      "durationCost": 6418,
      "currentCost": 3151,
      "childrenCost": 7452
    },
    {
      "id": 382,
      "parentIds": [
        172
      ],
      "name": "Работа 382",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 766,
      "backwardCost": 6894,
      "durationCost": 303,
      "currentCost": 794,
      "childrenCost": 7229
    },
    {
      "id": 383,
      "parentIds": [
        103
      ],
      "name": "Работа 383",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 8,
      "forwardCost": 7497,
      "backwardCost": 3399,
      "durationCost": 1262,
      "currentCost": 3082,
      "childrenCost": 4387
    },
    {
      "id": 384,
      "parentIds": [
        148
      ],
      "name": "Работа 384",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 24,
      "forwardCost": 7096,
      "backwardCost": 2427,
      "durationCost": 1297,
      "currentCost": 2066,
      "childrenCost": 4854
    },
    {
      "id": 385,
      "parentIds": [
        73
      ],
      "name": "Работа 385",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 23,
      "forwardCost": 8982,
      "backwardCost": 8428,
      "durationCost": 8539,
      "currentCost": 1526,
      "childrenCost": 5140
    },
    {
      "id": 386,
      "parentIds": [
        230
      ],
      "name": "Работа 386",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 18,
      "forwardCost": 4763,
      "backwardCost": 6601,
      "durationCost": 8216,
      "currentCost": 2167,
      "childrenCost": 2199
    },
    {
      "id": 387,
      "parentIds": [
        158
      ],
      "name": "Работа 387",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 1425,
      "backwardCost": 8787,
      "durationCost": 1552,
      "currentCost": 8628,
      "childrenCost": 6287
    },
    {
      "id": 388,
      "parentIds": [
        136
      ],
      "name": "Работа 388",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 13,
      "forwardCost": 8972,
      "backwardCost": 7989,
      "durationCost": 7388,
      "currentCost": 2261,
      "childrenCost": 8280
    },
    {
      "id": 389,
      "parentIds": [
        234
      ],
      "name": "Работа 389",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 8645,
      "backwardCost": 210,
      "durationCost": 4381,
      "currentCost": 4244,
      "childrenCost": 5357
    },
    {
      "id": 390,
      "parentIds": [
        162
      ],
      "name": "Работа 390",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 6,
      "forwardCost": 7583,
      "backwardCost": 6299,
      "durationCost": 2734,
      "currentCost": 7596,
      "childrenCost": 6999
    },
    {
      "id": 391,
      "parentIds": [
        172
      ],
      "name": "Работа 391",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 6345,
      "backwardCost": 1303,
      "durationCost": 1865,
      "currentCost": 494,
      "childrenCost": 3704
    },
    {
      "id": 392,
      "parentIds": [
        157
      ],
      "name": "Работа 392",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 432,
      "backwardCost": 7794,
      "durationCost": 2565,
      "currentCost": 2494,
      "childrenCost": 4847
    },
    {
      "id": 393,
      "parentIds": [
        122
      ],
      "name": "Работа 393",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 7022,
      "backwardCost": 767,
      "durationCost": 940,
      "currentCost": 3423,
      "childrenCost": 2598
    },
    {
      "id": 394,
      "parentIds": [
        150
      ],
      "name": "Работа 394",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 3138,
      "backwardCost": 1830,
      "durationCost": 2614,
      "currentCost": 1286,
      "childrenCost": 6204
    },
    {
      "id": 395,
      "parentIds": [
        200
      ],
      "name": "Работа 395",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 4361,
      "backwardCost": 4564,
      "durationCost": 550,
      "currentCost": 571,
      "childrenCost": 7671
    },
    {
      "id": 396,
      "parentIds": [
        168
      ],
      "name": "Работа 396",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 16,
      "forwardCost": 2851,
      "backwardCost": 170,
      "durationCost": 1593,
      "currentCost": 4486,
      "childrenCost": 6183
    },
    {
      "id": 397,
      "parentIds": [
        42
      ],
      "name": "Работа 397",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 172,
      "backwardCost": 998,
      "durationCost": 6461,
      "currentCost": 2897,
      "childrenCost": 8982
    },
    {
      "id": 398,
      "parentIds": [
        78
      ],
      "name": "Работа 398",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 19,
      "forwardCost": 3561,
      "backwardCost": 797,
      "durationCost": 3950,
      "currentCost": 4921,
      "childrenCost": 7683
    },
    {
      "id": 399,
      "parentIds": [
        185
      ],
      "name": "Работа 399",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 1228,
      "backwardCost": 2417,
      "durationCost": 7076,
      "currentCost": 7290,
      "childrenCost": 6859
    },
    {
      "id": 400,
      "parentIds": [
        61
      ],
      "name": "Работа 400",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 792,
      "backwardCost": 7397,
      "durationCost": 2038,
      "currentCost": 8706,
      "childrenCost": 7325
    },
    {
      "id": 401,
      "parentIds": [
        60
      ],
      "name": "Работа 401",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 1712,
      "backwardCost": 8795,
      "durationCost": 3079,
      "currentCost": 2987,
      "childrenCost": 6578
    },
    {
      "id": 402,
      "parentIds": [
        43
      ],
      "name": "Работа 402",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 23,
      "forwardCost": 359,
      "backwardCost": 4609,
      "durationCost": 1421,
      "currentCost": 7080,
      "childrenCost": 3486
    },
    {
      "id": 403,
      "parentIds": [
        173
      ],
      "name": "Работа 403",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 1,
      "forwardCost": 1230,
      "backwardCost": 3930,
      "durationCost": 522,
      "currentCost": 6958,
      "childrenCost": 7125
    },
    {
      "id": 404,
      "parentIds": [
        208
      ],
      "name": "Работа 404",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 28,
      "forwardCost": 1850,
      "backwardCost": 1411,
      "durationCost": 703,
      "currentCost": 4419,
      "childrenCost": 996
    },
    {
      "id": 405,
      "parentIds": [
        203
      ],
      "name": "Работа 405",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 4481,
      "backwardCost": 8699,
      "durationCost": 5997,
      "currentCost": 8727,
      "childrenCost": 3254
    },
    {
      "id": 406,
      "parentIds": [
        190
      ],
      "name": "Работа 406",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 23,
      "forwardCost": 2124,
      "backwardCost": 6679,
      "durationCost": 3630,
      "currentCost": 4002,
      "childrenCost": 4361
    },
    {
      "id": 407,
      "parentIds": [
        82
      ],
      "name": "Работа 407",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 5304,
      "backwardCost": 8123,
      "durationCost": 3428,
      "currentCost": 3415,
      "childrenCost": 2880
    },
    {
      "id": 408,
      "parentIds": [
        89
      ],
      "name": "Работа 408",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 1213,
      "backwardCost": 3882,
      "durationCost": 4276,
      "currentCost": 3889,
      "childrenCost": 2147
    },
    {
      "id": 409,
      "parentIds": [
        137
      ],
      "name": "Работа 409",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 25,
      "forwardCost": 2843,
      "backwardCost": 1446,
      "durationCost": 6435,
      "currentCost": 4658,
      "childrenCost": 2388
    },
    {
      "id": 410,
      "parentIds": [
        82
      ],
      "name": "Работа 410",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 19,
      "forwardCost": 4968,
      "backwardCost": 8461,
      "durationCost": 1048,
      "currentCost": 6778,
      "childrenCost": 4255
    },
    {
      "id": 411,
      "parentIds": [
        128
      ],
      "name": "Работа 411",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 7768,
      "backwardCost": 5237,
      "durationCost": 2454,
      "currentCost": 8888,
      "childrenCost": 4104
    },
    {
      "id": 412,
      "parentIds": [
        118
      ],
      "name": "Работа 412",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 627,
      "backwardCost": 4414,
      "durationCost": 7808,
      "currentCost": 7867,
      "childrenCost": 3371
    },
    {
      "id": 413,
      "parentIds": [
        92
      ],
      "name": "Работа 413",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 16,
      "forwardCost": 7433,
      "backwardCost": 6871,
      "durationCost": 6821,
      "currentCost": 3153,
      "childrenCost": 5211
    },
    {
      "id": 414,
      "parentIds": [
        208
      ],
      "name": "Работа 414",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 3778,
      "backwardCost": 7592,
      "durationCost": 6068,
      "currentCost": 916,
      "childrenCost": 2400
    },
    {
      "id": 415,
      "parentIds": [
        230
      ],
      "name": "Работа 415",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 16,
      "forwardCost": 8769,
      "backwardCost": 1030,
      "durationCost": 2476,
      "currentCost": 3219,
      "childrenCost": 1007
    },
    {
      "id": 416,
      "parentIds": [
        211
      ],
      "name": "Работа 416",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 10,
      "forwardCost": 3775,
      "backwardCost": 5427,
      "durationCost": 5393,
      "currentCost": 3239,
      "childrenCost": 2254
    },
    {
      "id": 417,
      "parentIds": [
        179
      ],
      "name": "Работа 417",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 695,
      "backwardCost": 5272,
      "durationCost": 6043,
      "currentCost": 7132,
      "childrenCost": 2383
    },
    {
      "id": 418,
      "parentIds": [
        235
      ],
      "name": "Работа 418",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 19,
      "forwardCost": 1552,
      "backwardCost": 8464,
      "durationCost": 8568,
      "currentCost": 4119,
      "childrenCost": 2244
    },
    {
      "id": 419,
      "parentIds": [
        229
      ],
      "name": "Работа 419",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 1,
      "forwardCost": 4388,
      "backwardCost": 4623,
      "durationCost": 8996,
      "currentCost": 7357,
      "childrenCost": 1406
    },
    {
      "id": 420,
      "parentIds": [
        210
      ],
      "name": "Работа 420",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 7545,
      "backwardCost": 3826,
      "durationCost": 3873,
      "currentCost": 8542,
      "childrenCost": 4468
    },
    {
      "id": 421,
      "parentIds": [
        165
      ],
      "name": "Работа 421",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 23,
      "forwardCost": 5373,
      "backwardCost": 5151,
      "durationCost": 8796,
      "currentCost": 7702,
      "childrenCost": 5269
    },
    {
      "id": 422,
      "parentIds": [
        56
      ],
      "name": "Работа 422",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 8017,
      "backwardCost": 556,
      "durationCost": 1935,
      "currentCost": 1538,
      "childrenCost": 8089
    },
    {
      "id": 423,
      "parentIds": [
        174
      ],
      "name": "Работа 423",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 5596,
      "backwardCost": 1069,
      "durationCost": 1430,
      "currentCost": 6286,
      "childrenCost": 1443
    },
    {
      "id": 424,
      "parentIds": [
        104
      ],
      "name": "Работа 424",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 5009,
      "backwardCost": 8234,
      "durationCost": 3519,
      "currentCost": 4143,
      "childrenCost": 1248
    },
    {
      "id": 425,
      "parentIds": [
        107
      ],
      "name": "Работа 425",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 8,
      "forwardCost": 3712,
      "backwardCost": 6853,
      "durationCost": 2902,
      "currentCost": 4500,
      "childrenCost": 8525
    },
    {
      "id": 426,
      "parentIds": [
        104
      ],
      "name": "Работа 426",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 7223,
      "backwardCost": 2225,
      "durationCost": 2128,
      "currentCost": 5527,
      "childrenCost": 1826
    },
    {
      "id": 427,
      "parentIds": [
        61
      ],
      "name": "Работа 427",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 3310,
      "backwardCost": 3720,
      "durationCost": 7438,
      "currentCost": 8417,
      "childrenCost": 766
    },
    {
      "id": 428,
      "parentIds": [
        227
      ],
      "name": "Работа 428",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 30,
      "forwardCost": 2722,
      "backwardCost": 5546,
      "durationCost": 1965,
      "currentCost": 7104,
      "childrenCost": 1985
    },
    {
      "id": 429,
      "parentIds": [
        127
      ],
      "name": "Работа 429",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 295,
      "backwardCost": 4414,
      "durationCost": 6917,
      "currentCost": 1341,
      "childrenCost": 6786
    },
    {
      "id": 430,
      "parentIds": [
        226
      ],
      "name": "Работа 430",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 5749,
      "backwardCost": 7088,
      "durationCost": 6294,
      "currentCost": 2414,
      "childrenCost": 989
    },
    {
      "id": 431,
      "parentIds": [
        183
      ],
      "name": "Работа 431",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 27,
      "forwardCost": 6183,
      "backwardCost": 5261,
      "durationCost": 3497,
      "currentCost": 6831,
      "childrenCost": 2133
    },
    {
      "id": 432,
      "parentIds": [
        114
      ],
      "name": "Работа 432",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 590,
      "backwardCost": 360,
      "durationCost": 3363,
      "currentCost": 567,
      "childrenCost": 1282
    },
    {
      "id": 433,
      "parentIds": [
        214
      ],
      "name": "Работа 433",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 15,
      "forwardCost": 2562,
      "backwardCost": 6384,
      "durationCost": 5194,
      "currentCost": 1032,
      "childrenCost": 5595
    },
    {
      "id": 434,
      "parentIds": [
        60
      ],
      "name": "Работа 434",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 18,
      "forwardCost": 5520,
      "backwardCost": 4063,
      "durationCost": 4128,
      "currentCost": 1646,
      "childrenCost": 5124
    },
    {
      "id": 435,
      "parentIds": [
        67
      ],
      "name": "Работа 435",
      "startDate": "2020-11-14T00:53:13.307Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 5834,
      "backwardCost": 5483,
      "durationCost": 5703,
      "currentCost": 2006,
      "childrenCost": 7650
    },
    {
      "id": 436,
      "parentIds": [
        202
      ],
      "name": "Работа 436",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 9,
      "forwardCost": 7975,
      "backwardCost": 2492,
      "durationCost": 1053,
      "currentCost": 8109,
      "childrenCost": 4029
    },
    {
      "id": 437,
      "parentIds": [
        150
      ],
      "name": "Работа 437",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 4107,
      "backwardCost": 690,
      "durationCost": 927,
      "currentCost": 6032,
      "childrenCost": 6570
    },
    {
      "id": 438,
      "parentIds": [
        183
      ],
      "name": "Работа 438",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 30,
      "forwardCost": 2093,
      "backwardCost": 8690,
      "durationCost": 2840,
      "currentCost": 2069,
      "childrenCost": 2520
    },
    {
      "id": 439,
      "parentIds": [
        173
      ],
      "name": "Работа 439",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 4682,
      "backwardCost": 1972,
      "durationCost": 7286,
      "currentCost": 6131,
      "childrenCost": 7602
    },
    {
      "id": 440,
      "parentIds": [
        56
      ],
      "name": "Работа 440",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 10,
      "forwardCost": 3201,
      "backwardCost": 3874,
      "durationCost": 2441,
      "currentCost": 2010,
      "childrenCost": 6325
    },
    {
      "id": 441,
      "parentIds": [
        67
      ],
      "name": "Работа 441",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 26,
      "forwardCost": 7273,
      "backwardCost": 7407,
      "durationCost": 6321,
      "currentCost": 6171,
      "childrenCost": 4216
    },
    {
      "id": 442,
      "parentIds": [
        134
      ],
      "name": "Работа 442",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 19,
      "forwardCost": 1143,
      "backwardCost": 7548,
      "durationCost": 1851,
      "currentCost": 1982,
      "childrenCost": 3112
    },
    {
      "id": 443,
      "parentIds": [
        166
      ],
      "name": "Работа 443",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 14,
      "forwardCost": 8428,
      "backwardCost": 7109,
      "durationCost": 4549,
      "currentCost": 6766,
      "childrenCost": 8037
    },
    {
      "id": 444,
      "parentIds": [
        54
      ],
      "name": "Работа 444",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 14,
      "forwardCost": 8899,
      "backwardCost": 8141,
      "durationCost": 1375,
      "currentCost": 6104,
      "childrenCost": 6905
    },
    {
      "id": 445,
      "parentIds": [
        46
      ],
      "name": "Работа 445",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 4270,
      "backwardCost": 4621,
      "durationCost": 8520,
      "currentCost": 7143,
      "childrenCost": 8325
    },
    {
      "id": 446,
      "parentIds": [
        216
      ],
      "name": "Работа 446",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 6,
      "forwardCost": 3198,
      "backwardCost": 7077,
      "durationCost": 898,
      "currentCost": 2400,
      "childrenCost": 1751
    },
    {
      "id": 447,
      "parentIds": [
        132
      ],
      "name": "Работа 447",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 25,
      "forwardCost": 2942,
      "backwardCost": 5696,
      "durationCost": 2358,
      "currentCost": 7489,
      "childrenCost": 2814
    },
    {
      "id": 448,
      "parentIds": [
        218
      ],
      "name": "Работа 448",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 15,
      "forwardCost": 5776,
      "backwardCost": 7591,
      "durationCost": 1880,
      "currentCost": 3514,
      "childrenCost": 1459
    },
    {
      "id": 449,
      "parentIds": [
        173
      ],
      "name": "Работа 449",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 2403,
      "backwardCost": 4258,
      "durationCost": 5757,
      "currentCost": 7824,
      "childrenCost": 7517
    },
    {
      "id": 450,
      "parentIds": [
        129
      ],
      "name": "Работа 450",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 6877,
      "backwardCost": 2562,
      "durationCost": 1896,
      "currentCost": 1975,
      "childrenCost": 8346
    },
    {
      "id": 451,
      "parentIds": [
        215
      ],
      "name": "Работа 451",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 7943,
      "backwardCost": 3993,
      "durationCost": 698,
      "currentCost": 6623,
      "childrenCost": 5915
    },
    {
      "id": 452,
      "parentIds": [
        78
      ],
      "name": "Работа 452",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 28,
      "forwardCost": 6977,
      "backwardCost": 4648,
      "durationCost": 185,
      "currentCost": 7163,
      "childrenCost": 699
    },
    {
      "id": 453,
      "parentIds": [
        56
      ],
      "name": "Работа 453",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 30,
      "forwardCost": 6423,
      "backwardCost": 2372,
      "durationCost": 3017,
      "currentCost": 5334,
      "childrenCost": 271
    },
    {
      "id": 454,
      "parentIds": [
        194
      ],
      "name": "Работа 454",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 2265,
      "backwardCost": 4465,
      "durationCost": 2501,
      "currentCost": 7201,
      "childrenCost": 3791
    },
    {
      "id": 455,
      "parentIds": [
        234
      ],
      "name": "Работа 455",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 8,
      "forwardCost": 2236,
      "backwardCost": 6190,
      "durationCost": 5721,
      "currentCost": 4628,
      "childrenCost": 8277
    },
    {
      "id": 456,
      "parentIds": [
        229
      ],
      "name": "Работа 456",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 18,
      "forwardCost": 1414,
      "backwardCost": 5416,
      "durationCost": 2091,
      "currentCost": 1079,
      "childrenCost": 7221
    },
    {
      "id": 457,
      "parentIds": [
        95
      ],
      "name": "Работа 457",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 9,
      "forwardCost": 8907,
      "backwardCost": 5864,
      "durationCost": 4126,
      "currentCost": 5352,
      "childrenCost": 1209
    },
    {
      "id": 458,
      "parentIds": [
        98
      ],
      "name": "Работа 458",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 2340,
      "backwardCost": 798,
      "durationCost": 1316,
      "currentCost": 126,
      "childrenCost": 1453
    },
    {
      "id": 459,
      "parentIds": [
        212
      ],
      "name": "Работа 459",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 5973,
      "backwardCost": 462,
      "durationCost": 2984,
      "currentCost": 5960,
      "childrenCost": 1770
    },
    {
      "id": 460,
      "parentIds": [
        57
      ],
      "name": "Работа 460",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 5690,
      "backwardCost": 1866,
      "durationCost": 8188,
      "currentCost": 5233,
      "childrenCost": 138
    },
    {
      "id": 461,
      "parentIds": [
        55
      ],
      "name": "Работа 461",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 23,
      "forwardCost": 3551,
      "backwardCost": 963,
      "durationCost": 4301,
      "currentCost": 1577,
      "childrenCost": 8376
    },
    {
      "id": 462,
      "parentIds": [
        95
      ],
      "name": "Работа 462",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 26,
      "forwardCost": 2332,
      "backwardCost": 5925,
      "durationCost": 3907,
      "currentCost": 2068,
      "childrenCost": 2457
    },
    {
      "id": 463,
      "parentIds": [
        98
      ],
      "name": "Работа 463",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 4007,
      "backwardCost": 1185,
      "durationCost": 5637,
      "currentCost": 4087,
      "childrenCost": 3131
    },
    {
      "id": 464,
      "parentIds": [
        232
      ],
      "name": "Работа 464",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 8609,
      "backwardCost": 8316,
      "durationCost": 4949,
      "currentCost": 1084,
      "childrenCost": 7831
    },
    {
      "id": 465,
      "parentIds": [
        105
      ],
      "name": "Работа 465",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 1507,
      "backwardCost": 8879,
      "durationCost": 2889,
      "currentCost": 7777,
      "childrenCost": 1862
    },
    {
      "id": 466,
      "parentIds": [
        167
      ],
      "name": "Работа 466",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 27,
      "forwardCost": 7329,
      "backwardCost": 7685,
      "durationCost": 7561,
      "currentCost": 3466,
      "childrenCost": 7346
    },
    {
      "id": 467,
      "parentIds": [
        99
      ],
      "name": "Работа 467",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 13,
      "forwardCost": 8192,
      "backwardCost": 2660,
      "durationCost": 5184,
      "currentCost": 7467,
      "childrenCost": 2971
    },
    {
      "id": 468,
      "parentIds": [
        223
      ],
      "name": "Работа 468",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 9,
      "forwardCost": 6232,
      "backwardCost": 5142,
      "durationCost": 1509,
      "currentCost": 5745,
      "childrenCost": 1922
    },
    {
      "id": 469,
      "parentIds": [
        85
      ],
      "name": "Работа 469",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 24,
      "forwardCost": 6317,
      "backwardCost": 8751,
      "durationCost": 4105,
      "currentCost": 4161,
      "childrenCost": 8976
    },
    {
      "id": 470,
      "parentIds": [
        57
      ],
      "name": "Работа 470",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 1603,
      "backwardCost": 4218,
      "durationCost": 6060,
      "currentCost": 1086,
      "childrenCost": 6816
    },
    {
      "id": 471,
      "parentIds": [
        188
      ],
      "name": "Работа 471",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 16,
      "forwardCost": 1947,
      "backwardCost": 2774,
      "durationCost": 6752,
      "currentCost": 5703,
      "childrenCost": 2651
    },
    {
      "id": 472,
      "parentIds": [
        170
      ],
      "name": "Работа 472",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 6067,
      "backwardCost": 5349,
      "durationCost": 409,
      "currentCost": 3241,
      "childrenCost": 6439
    },
    {
      "id": 473,
      "parentIds": [
        185
      ],
      "name": "Работа 473",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 5128,
      "backwardCost": 8386,
      "durationCost": 1261,
      "currentCost": 3425,
      "childrenCost": 7583
    },
    {
      "id": 474,
      "parentIds": [
        153
      ],
      "name": "Работа 474",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 2447,
      "backwardCost": 209,
      "durationCost": 6285,
      "currentCost": 8510,
      "childrenCost": 8646
    },
    {
      "id": 475,
      "parentIds": [
        164
      ],
      "name": "Работа 475",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 26,
      "forwardCost": 4678,
      "backwardCost": 5425,
      "durationCost": 6866,
      "currentCost": 8173,
      "childrenCost": 3224
    },
    {
      "id": 476,
      "parentIds": [
        178
      ],
      "name": "Работа 476",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 3483,
      "backwardCost": 3719,
      "durationCost": 7006,
      "currentCost": 1610,
      "childrenCost": 1670
    },
    {
      "id": 477,
      "parentIds": [
        222
      ],
      "name": "Работа 477",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 4471,
      "backwardCost": 7671,
      "durationCost": 1964,
      "currentCost": 6058,
      "childrenCost": 3589
    },
    {
      "id": 478,
      "parentIds": [
        126
      ],
      "name": "Работа 478",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 16,
      "forwardCost": 1089,
      "backwardCost": 8279,
      "durationCost": 2204,
      "currentCost": 8698,
      "childrenCost": 2931
    },
    {
      "id": 479,
      "parentIds": [
        139
      ],
      "name": "Работа 479",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 15,
      "forwardCost": 5547,
      "backwardCost": 8548,
      "durationCost": 5912,
      "currentCost": 5349,
      "childrenCost": 7955
    },
    {
      "id": 480,
      "parentIds": [
        175
      ],
      "name": "Работа 480",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 13,
      "forwardCost": 2467,
      "backwardCost": 2124,
      "durationCost": 3666,
      "currentCost": 7568,
      "childrenCost": 6644
    },
    {
      "id": 481,
      "parentIds": [
        165
      ],
      "name": "Работа 481",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 3991,
      "backwardCost": 2678,
      "durationCost": 7210,
      "currentCost": 909,
      "childrenCost": 3915
    },
    {
      "id": 482,
      "parentIds": [
        203
      ],
      "name": "Работа 482",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 7525,
      "backwardCost": 2502,
      "durationCost": 8785,
      "currentCost": 3984,
      "childrenCost": 4364
    },
    {
      "id": 483,
      "parentIds": [
        74
      ],
      "name": "Работа 483",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 6101,
      "backwardCost": 2111,
      "durationCost": 7872,
      "currentCost": 7542,
      "childrenCost": 154
    },
    {
      "id": 484,
      "parentIds": [
        173
      ],
      "name": "Работа 484",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 25,
      "forwardCost": 3895,
      "backwardCost": 4257,
      "durationCost": 2463,
      "currentCost": 2981,
      "childrenCost": 2008
    },
    {
      "id": 485,
      "parentIds": [
        225
      ],
      "name": "Работа 485",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 5,
      "forwardCost": 5913,
      "backwardCost": 7741,
      "durationCost": 282,
      "currentCost": 5052,
      "childrenCost": 1164
    },
    {
      "id": 486,
      "parentIds": [
        157
      ],
      "name": "Работа 486",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 3437,
      "backwardCost": 2605,
      "durationCost": 7033,
      "currentCost": 7723,
      "childrenCost": 4898
    },
    {
      "id": 487,
      "parentIds": [
        75
      ],
      "name": "Работа 487",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 16,
      "forwardCost": 7602,
      "backwardCost": 792,
      "durationCost": 1947,
      "currentCost": 1146,
      "childrenCost": 5239
    },
    {
      "id": 488,
      "parentIds": [
        152
      ],
      "name": "Работа 488",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 25,
      "forwardCost": 4252,
      "backwardCost": 3317,
      "durationCost": 872,
      "currentCost": 4403,
      "childrenCost": 1389
    },
    {
      "id": 489,
      "parentIds": [
        83
      ],
      "name": "Работа 489",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 4,
      "forwardCost": 2314,
      "backwardCost": 5441,
      "durationCost": 5505,
      "currentCost": 3168,
      "childrenCost": 8794
    },
    {
      "id": 490,
      "parentIds": [
        99
      ],
      "name": "Работа 490",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 25,
      "forwardCost": 4618,
      "backwardCost": 8127,
      "durationCost": 8003,
      "currentCost": 5995,
      "childrenCost": 2763
    },
    {
      "id": 491,
      "parentIds": [
        148
      ],
      "name": "Работа 491",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 6039,
      "backwardCost": 3261,
      "durationCost": 1245,
      "currentCost": 5886,
      "childrenCost": 8908
    },
    {
      "id": 492,
      "parentIds": [
        102
      ],
      "name": "Работа 492",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 4727,
      "backwardCost": 3259,
      "durationCost": 3287,
      "currentCost": 8613,
      "childrenCost": 4330
    },
    {
      "id": 493,
      "parentIds": [
        53
      ],
      "name": "Работа 493",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 9,
      "forwardCost": 6035,
      "backwardCost": 8190,
      "durationCost": 8579,
      "currentCost": 4251,
      "childrenCost": 5940
    },
    {
      "id": 494,
      "parentIds": [
        118
      ],
      "name": "Работа 494",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 28,
      "forwardCost": 6045,
      "backwardCost": 4592,
      "durationCost": 264,
      "currentCost": 335,
      "childrenCost": 8860
    },
    {
      "id": 495,
      "parentIds": [
        38
      ],
      "name": "Работа 495",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 2630,
      "backwardCost": 311,
      "durationCost": 1133,
      "currentCost": 3520,
      "childrenCost": 3123
    },
    {
      "id": 496,
      "parentIds": [
        217
      ],
      "name": "Работа 496",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 139,
      "backwardCost": 6541,
      "durationCost": 4701,
      "currentCost": 7291,
      "childrenCost": 3604
    },
    {
      "id": 497,
      "parentIds": [
        104
      ],
      "name": "Работа 497",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 24,
      "forwardCost": 790,
      "backwardCost": 6371,
      "durationCost": 4196,
      "currentCost": 3354,
      "childrenCost": 2472
    },
    {
      "id": 498,
      "parentIds": [
        218
      ],
      "name": "Работа 498",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 27,
      "forwardCost": 8791,
      "backwardCost": 3152,
      "durationCost": 8810,
      "currentCost": 5792,
      "childrenCost": 7991
    },
    {
      "id": 499,
      "parentIds": [
        178
      ],
      "name": "Работа 499",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 27,
      "forwardCost": 5830,
      "backwardCost": 4291,
      "durationCost": 4213,
      "currentCost": 5331,
      "childrenCost": 2071
    },
    {
      "id": 500,
      "parentIds": [
        190
      ],
      "name": "Работа 500",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 5547,
      "backwardCost": 7992,
      "durationCost": 2710,
      "currentCost": 3425,
      "childrenCost": 7912
    },
    {
      "id": 501,
      "parentIds": [
        152
      ],
      "name": "Работа 501",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 7546,
      "backwardCost": 7131,
      "durationCost": 3862,
      "currentCost": 8201,
      "childrenCost": 990
    },
    {
      "id": 502,
      "parentIds": [
        232
      ],
      "name": "Работа 502",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 2243,
      "backwardCost": 3242,
      "durationCost": 6245,
      "currentCost": 7224,
      "childrenCost": 7891
    },
    {
      "id": 503,
      "parentIds": [
        97
      ],
      "name": "Работа 503",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 6412,
      "backwardCost": 5368,
      "durationCost": 6910,
      "currentCost": 1123,
      "childrenCost": 4197
    },
    {
      "id": 504,
      "parentIds": [
        87
      ],
      "name": "Работа 504",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 28,
      "forwardCost": 5078,
      "backwardCost": 6312,
      "durationCost": 1187,
      "currentCost": 3602,
      "childrenCost": 5033
    },
    {
      "id": 505,
      "parentIds": [
        164
      ],
      "name": "Работа 505",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 8750,
      "backwardCost": 3632,
      "durationCost": 6257,
      "currentCost": 4917,
      "childrenCost": 5745
    },
    {
      "id": 506,
      "parentIds": [
        128
      ],
      "name": "Работа 506",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 21,
      "forwardCost": 5478,
      "backwardCost": 1309,
      "durationCost": 3187,
      "currentCost": 4355,
      "childrenCost": 5967
    },
    {
      "id": 507,
      "parentIds": [
        88
      ],
      "name": "Работа 507",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 25,
      "forwardCost": 4654,
      "backwardCost": 1028,
      "durationCost": 5650,
      "currentCost": 4330,
      "childrenCost": 7451
    },
    {
      "id": 508,
      "parentIds": [
        138
      ],
      "name": "Работа 508",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 2401,
      "backwardCost": 121,
      "durationCost": 7807,
      "currentCost": 7341,
      "childrenCost": 2978
    },
    {
      "id": 509,
      "parentIds": [
        68
      ],
      "name": "Работа 509",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 1,
      "forwardCost": 5961,
      "backwardCost": 8676,
      "durationCost": 3142,
      "currentCost": 6019,
      "childrenCost": 7575
    },
    {
      "id": 510,
      "parentIds": [
        95
      ],
      "name": "Работа 510",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 6483,
      "backwardCost": 2502,
      "durationCost": 4635,
      "currentCost": 4522,
      "childrenCost": 6032
    },
    {
      "id": 511,
      "parentIds": [
        85
      ],
      "name": "Работа 511",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 633,
      "backwardCost": 1995,
      "durationCost": 8083,
      "currentCost": 6839,
      "childrenCost": 6157
    },
    {
      "id": 512,
      "parentIds": [
        191
      ],
      "name": "Работа 512",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 2400,
      "backwardCost": 5394,
      "durationCost": 6306,
      "currentCost": 1602,
      "childrenCost": 7928
    },
    {
      "id": 513,
      "parentIds": [
        93
      ],
      "name": "Работа 513",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 20,
      "forwardCost": 3631,
      "backwardCost": 7551,
      "durationCost": 1172,
      "currentCost": 5391,
      "childrenCost": 7645
    },
    {
      "id": 514,
      "parentIds": [
        216
      ],
      "name": "Работа 514",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 17,
      "forwardCost": 4722,
      "backwardCost": 3039,
      "durationCost": 6097,
      "currentCost": 5397,
      "childrenCost": 6137
    },
    {
      "id": 515,
      "parentIds": [
        233
      ],
      "name": "Работа 515",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 7200,
      "backwardCost": 5919,
      "durationCost": 7891,
      "currentCost": 8884,
      "childrenCost": 3852
    },
    {
      "id": 516,
      "parentIds": [
        124
      ],
      "name": "Работа 516",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 19,
      "forwardCost": 6254,
      "backwardCost": 8078,
      "durationCost": 1102,
      "currentCost": 3476,
      "childrenCost": 1813
    },
    {
      "id": 517,
      "parentIds": [
        95
      ],
      "name": "Работа 517",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 6749,
      "backwardCost": 5336,
      "durationCost": 628,
      "currentCost": 843,
      "childrenCost": 8954
    },
    {
      "id": 518,
      "parentIds": [
        147
      ],
      "name": "Работа 518",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 30,
      "forwardCost": 2210,
      "backwardCost": 8066,
      "durationCost": 2335,
      "currentCost": 4494,
      "childrenCost": 8361
    },
    {
      "id": 519,
      "parentIds": [
        73
      ],
      "name": "Работа 519",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 326,
      "backwardCost": 2908,
      "durationCost": 2818,
      "currentCost": 2140,
      "childrenCost": 4403
    },
    {
      "id": 520,
      "parentIds": [
        152
      ],
      "name": "Работа 520",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 29,
      "forwardCost": 8235,
      "backwardCost": 8449,
      "durationCost": 2589,
      "currentCost": 7704,
      "childrenCost": 956
    },
    {
      "id": 521,
      "parentIds": [
        73
      ],
      "name": "Работа 521",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 14,
      "forwardCost": 1561,
      "backwardCost": 2107,
      "durationCost": 342,
      "currentCost": 420,
      "childrenCost": 8243
    },
    {
      "id": 522,
      "parentIds": [
        153
      ],
      "name": "Работа 522",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 6,
      "forwardCost": 3485,
      "backwardCost": 8851,
      "durationCost": 6402,
      "currentCost": 8984,
      "childrenCost": 550
    },
    {
      "id": 523,
      "parentIds": [
        82
      ],
      "name": "Работа 523",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 28,
      "forwardCost": 3861,
      "backwardCost": 1813,
      "durationCost": 4987,
      "currentCost": 4425,
      "childrenCost": 7850
    },
    {
      "id": 524,
      "parentIds": [
        134
      ],
      "name": "Работа 524",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 22,
      "forwardCost": 3574,
      "backwardCost": 4050,
      "durationCost": 4695,
      "currentCost": 1532,
      "childrenCost": 273
    },
    {
      "id": 525,
      "parentIds": [
        233
      ],
      "name": "Работа 525",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 6910,
      "backwardCost": 3244,
      "durationCost": 1167,
      "currentCost": 2127,
      "childrenCost": 7221
    },
    {
      "id": 526,
      "parentIds": [
        204
      ],
      "name": "Работа 526",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 3,
      "forwardCost": 2982,
      "backwardCost": 3939,
      "durationCost": 8365,
      "currentCost": 3371,
      "childrenCost": 1149
    },
    {
      "id": 527,
      "parentIds": [
        141
      ],
      "name": "Работа 527",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 27,
      "forwardCost": 1997,
      "backwardCost": 3134,
      "durationCost": 3377,
      "currentCost": 4255,
      "childrenCost": 5302
    },
    {
      "id": 528,
      "parentIds": [
        44
      ],
      "name": "Работа 528",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 1,
      "forwardCost": 7509,
      "backwardCost": 8260,
      "durationCost": 8058,
      "currentCost": 5616,
      "childrenCost": 8570
    },
    {
      "id": 529,
      "parentIds": [
        71
      ],
      "name": "Работа 529",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 7,
      "forwardCost": 7841,
      "backwardCost": 5156,
      "durationCost": 126,
      "currentCost": 2637,
      "childrenCost": 6759
    },
    {
      "id": 530,
      "parentIds": [
        100
      ],
      "name": "Работа 530",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 23,
      "forwardCost": 3459,
      "backwardCost": 7954,
      "durationCost": 4732,
      "currentCost": 2071,
      "childrenCost": 2679
    },
    {
      "id": 531,
      "parentIds": [
        121
      ],
      "name": "Работа 531",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 30,
      "forwardCost": 4269,
      "backwardCost": 4367,
      "durationCost": 2069,
      "currentCost": 7195,
      "childrenCost": 5988
    },
    {
      "id": 532,
      "parentIds": [
        181
      ],
      "name": "Работа 532",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 28,
      "forwardCost": 4525,
      "backwardCost": 3976,
      "durationCost": 2338,
      "currentCost": 141,
      "childrenCost": 2901
    },
    {
      "id": 533,
      "parentIds": [
        217
      ],
      "name": "Работа 533",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 2,
      "forwardCost": 2476,
      "backwardCost": 1271,
      "durationCost": 1121,
      "currentCost": 4167,
      "childrenCost": 1747
    },
    {
      "id": 534,
      "parentIds": [
        39
      ],
      "name": "Работа 534",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 8,
      "forwardCost": 4341,
      "backwardCost": 6689,
      "durationCost": 6292,
      "currentCost": 6774,
      "childrenCost": 2243
    },
    {
      "id": 535,
      "parentIds": [
        124
      ],
      "name": "Работа 535",
      "startDate": "2020-11-14T00:53:29.027Z",
      "duration": 28,
      "minDuration": 11,
      "forwardCost": 7159,
      "backwardCost": 812,
      "durationCost": 7376,
      "currentCost": 2571,
      "childrenCost": 8019
    },
    {
      "id": 536,
      "parentIds": [
        98
      ],
      "name": "Работа 536",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 24,
      "forwardCost": 4362,
      "backwardCost": 1783,
      "durationCost": 3464,
      "currentCost": 2991,
      "childrenCost": 1069
    },
    {
      "id": 537,
      "parentIds": [
        209
      ],
      "name": "Работа 537",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 3,
      "forwardCost": 2403,
      "backwardCost": 5510,
      "durationCost": 3864,
      "currentCost": 7819,
      "childrenCost": 212
    },
    {
      "id": 538,
      "parentIds": [
        177
      ],
      "name": "Работа 538",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 5,
      "forwardCost": 5199,
      "backwardCost": 962,
      "durationCost": 1473,
      "currentCost": 7753,
      "childrenCost": 2604
    },
    {
      "id": 539,
      "parentIds": [
        63
      ],
      "name": "Работа 539",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 11,
      "forwardCost": 3474,
      "backwardCost": 2811,
      "durationCost": 8840,
      "currentCost": 7861,
      "childrenCost": 2684
    },
    {
      "id": 540,
      "parentIds": [
        123
      ],
      "name": "Работа 540",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 11,
      "forwardCost": 5325,
      "backwardCost": 840,
      "durationCost": 2285,
      "currentCost": 1427,
      "childrenCost": 7705
    },
    {
      "id": 541,
      "parentIds": [
        139
      ],
      "name": "Работа 541",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 1,
      "forwardCost": 5097,
      "backwardCost": 3447,
      "durationCost": 1514,
      "currentCost": 5390,
      "childrenCost": 1127
    },
    {
      "id": 542,
      "parentIds": [
        222
      ],
      "name": "Работа 542",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 1,
      "forwardCost": 4848,
      "backwardCost": 2707,
      "durationCost": 8714,
      "currentCost": 7023,
      "childrenCost": 1280
    },
    {
      "id": 543,
      "parentIds": [
        146
      ],
      "name": "Работа 543",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 15,
      "forwardCost": 3553,
      "backwardCost": 5271,
      "durationCost": 6524,
      "currentCost": 7874,
      "childrenCost": 7311
    },
    {
      "id": 544,
      "parentIds": [
        193
      ],
      "name": "Работа 544",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 16,
      "forwardCost": 8722,
      "backwardCost": 5132,
      "durationCost": 7635,
      "currentCost": 191,
      "childrenCost": 6433
    },
    {
      "id": 545,
      "parentIds": [
        175
      ],
      "name": "Работа 545",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 16,
      "forwardCost": 5153,
      "backwardCost": 6299,
      "durationCost": 4366,
      "currentCost": 8251,
      "childrenCost": 2599
    },
    {
      "id": 546,
      "parentIds": [
        84
      ],
      "name": "Работа 546",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 24,
      "forwardCost": 2187,
      "backwardCost": 7003,
      "durationCost": 2730,
      "currentCost": 1416,
      "childrenCost": 8411
    },
    {
      "id": 547,
      "parentIds": [
        235
      ],
      "name": "Работа 547",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 30,
      "forwardCost": 6879,
      "backwardCost": 4052,
      "durationCost": 4872,
      "currentCost": 5382,
      "childrenCost": 4667
    },
    {
      "id": 548,
      "parentIds": [
        219
      ],
      "name": "Работа 548",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 18,
      "forwardCost": 5193,
      "backwardCost": 7751,
      "durationCost": 4761,
      "currentCost": 736,
      "childrenCost": 8559
    },
    {
      "id": 549,
      "parentIds": [
        131
      ],
      "name": "Работа 549",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 9,
      "forwardCost": 3146,
      "backwardCost": 1538,
      "durationCost": 5101,
      "currentCost": 1617,
      "childrenCost": 689
    },
    {
      "id": 550,
      "parentIds": [
        203
      ],
      "name": "Работа 550",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 13,
      "forwardCost": 821,
      "backwardCost": 4479,
      "durationCost": 2121,
      "currentCost": 6018,
      "childrenCost": 1700
    },
    {
      "id": 551,
      "parentIds": [
        48
      ],
      "name": "Работа 551",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 17,
      "forwardCost": 789,
      "backwardCost": 8664,
      "durationCost": 7387,
      "currentCost": 839,
      "childrenCost": 3054
    },
    {
      "id": 552,
      "parentIds": [
        151
      ],
      "name": "Работа 552",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 15,
      "forwardCost": 5159,
      "backwardCost": 5540,
      "durationCost": 2113,
      "currentCost": 6770,
      "childrenCost": 1372
    },
    {
      "id": 553,
      "parentIds": [
        229
      ],
      "name": "Работа 553",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 8,
      "forwardCost": 3760,
      "backwardCost": 5943,
      "durationCost": 3229,
      "currentCost": 6372,
      "childrenCost": 1456
    },
    {
      "id": 554,
      "parentIds": [
        209
      ],
      "name": "Работа 554",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 7,
      "forwardCost": 2815,
      "backwardCost": 6094,
      "durationCost": 5609,
      "currentCost": 7698,
      "childrenCost": 8868
    },
    {
      "id": 555,
      "parentIds": [
        175
      ],
      "name": "Работа 555",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 10,
      "forwardCost": 1002,
      "backwardCost": 8381,
      "durationCost": 6412,
      "currentCost": 6060,
      "childrenCost": 4407
    },
    {
      "id": 556,
      "parentIds": [
        77
      ],
      "name": "Работа 556",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 12,
      "forwardCost": 5332,
      "backwardCost": 8660,
      "durationCost": 8599,
      "currentCost": 2218,
      "childrenCost": 6990
    },
    {
      "id": 557,
      "parentIds": [
        87
      ],
      "name": "Работа 557",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 14,
      "forwardCost": 5943,
      "backwardCost": 6669,
      "durationCost": 1334,
      "currentCost": 8255,
      "childrenCost": 6936
    },
    {
      "id": 558,
      "parentIds": [
        38
      ],
      "name": "Работа 558",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 28,
      "forwardCost": 2439,
      "backwardCost": 1053,
      "durationCost": 7122,
      "currentCost": 2471,
      "childrenCost": 7110
    },
    {
      "id": 559,
      "parentIds": [
        65
      ],
      "name": "Работа 559",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 15,
      "forwardCost": 6881,
      "backwardCost": 3864,
      "durationCost": 3580,
      "currentCost": 1733,
      "childrenCost": 758
    },
    {
      "id": 560,
      "parentIds": [
        97
      ],
      "name": "Работа 560",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 20,
      "forwardCost": 2417,
      "backwardCost": 3055,
      "durationCost": 686,
      "currentCost": 5884,
      "childrenCost": 6775
    },
    {
      "id": 561,
      "parentIds": [
        227
      ],
      "name": "Работа 561",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 17,
      "forwardCost": 4749,
      "backwardCost": 3209,
      "durationCost": 7551,
      "currentCost": 4289,
      "childrenCost": 7757
    },
    {
      "id": 562,
      "parentIds": [
        62
      ],
      "name": "Работа 562",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 14,
      "forwardCost": 806,
      "backwardCost": 7500,
      "durationCost": 2722,
      "currentCost": 7698,
      "childrenCost": 6776
    },
    {
      "id": 563,
      "parentIds": [
        134
      ],
      "name": "Работа 563",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 28,
      "forwardCost": 6809,
      "backwardCost": 8703,
      "durationCost": 5294,
      "currentCost": 988,
      "childrenCost": 6740
    },
    {
      "id": 564,
      "parentIds": [
        53
      ],
      "name": "Работа 564",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 14,
      "forwardCost": 8080,
      "backwardCost": 3963,
      "durationCost": 8154,
      "currentCost": 2241,
      "childrenCost": 5630
    },
    {
      "id": 565,
      "parentIds": [
        203
      ],
      "name": "Работа 565",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 25,
      "forwardCost": 2129,
      "backwardCost": 1191,
      "durationCost": 7283,
      "currentCost": 4378,
      "childrenCost": 3894
    },
    {
      "id": 566,
      "parentIds": [
        159
      ],
      "name": "Работа 566",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 11,
      "forwardCost": 2487,
      "backwardCost": 403,
      "durationCost": 8519,
      "currentCost": 8918,
      "childrenCost": 6179
    },
    {
      "id": 567,
      "parentIds": [
        200
      ],
      "name": "Работа 567",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 13,
      "forwardCost": 8496,
      "backwardCost": 4380,
      "durationCost": 5633,
      "currentCost": 992,
      "childrenCost": 1418
    },
    {
      "id": 568,
      "parentIds": [
        184
      ],
      "name": "Работа 568",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 17,
      "forwardCost": 4517,
      "backwardCost": 144,
      "durationCost": 1435,
      "currentCost": 8506,
      "childrenCost": 1437
    },
    {
      "id": 569,
      "parentIds": [
        118
      ],
      "name": "Работа 569",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 21,
      "forwardCost": 4582,
      "backwardCost": 8713,
      "durationCost": 6488,
      "currentCost": 4198,
      "childrenCost": 6613
    },
    {
      "id": 570,
      "parentIds": [
        197
      ],
      "name": "Работа 570",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 18,
      "forwardCost": 6901,
      "backwardCost": 1641,
      "durationCost": 4099,
      "currentCost": 4722,
      "childrenCost": 684
    },
    {
      "id": 571,
      "parentIds": [
        165
      ],
      "name": "Работа 571",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 8,
      "forwardCost": 6298,
      "backwardCost": 6254,
      "durationCost": 8243,
      "currentCost": 3659,
      "childrenCost": 7751
    },
    {
      "id": 572,
      "parentIds": [
        235
      ],
      "name": "Работа 572",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 19,
      "forwardCost": 835,
      "backwardCost": 4040,
      "durationCost": 3448,
      "currentCost": 8695,
      "childrenCost": 7993
    },
    {
      "id": 573,
      "parentIds": [
        151
      ],
      "name": "Работа 573",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 9,
      "forwardCost": 4823,
      "backwardCost": 1467,
      "durationCost": 4680,
      "currentCost": 7186,
      "childrenCost": 622
    },
    {
      "id": 574,
      "parentIds": [
        87
      ],
      "name": "Работа 574",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 5,
      "forwardCost": 4892,
      "backwardCost": 7202,
      "durationCost": 5418,
      "currentCost": 1602,
      "childrenCost": 5885
    },
    {
      "id": 575,
      "parentIds": [
        217
      ],
      "name": "Работа 575",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 28,
      "forwardCost": 5021,
      "backwardCost": 2936,
      "durationCost": 661,
      "currentCost": 7194,
      "childrenCost": 2137
    },
    {
      "id": 576,
      "parentIds": [
        93
      ],
      "name": "Работа 576",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 27,
      "forwardCost": 7090,
      "backwardCost": 1701,
      "durationCost": 7544,
      "currentCost": 8313,
      "childrenCost": 5648
    },
    {
      "id": 577,
      "parentIds": [
        199
      ],
      "name": "Работа 577",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 22,
      "forwardCost": 1673,
      "backwardCost": 2746,
      "durationCost": 2499,
      "currentCost": 5744,
      "childrenCost": 172
    },
    {
      "id": 578,
      "parentIds": [
        223
      ],
      "name": "Работа 578",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 5,
      "forwardCost": 147,
      "backwardCost": 7547,
      "durationCost": 1967,
      "currentCost": 942,
      "childrenCost": 3354
    },
    {
      "id": 579,
      "parentIds": [
        232
      ],
      "name": "Работа 579",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 27,
      "forwardCost": 8730,
      "backwardCost": 5686,
      "durationCost": 7291,
      "currentCost": 3528,
      "childrenCost": 4976
    },
    {
      "id": 580,
      "parentIds": [
        115
      ],
      "name": "Работа 580",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 6,
      "forwardCost": 2407,
      "backwardCost": 8913,
      "durationCost": 2336,
      "currentCost": 2922,
      "childrenCost": 6650
    },
    {
      "id": 581,
      "parentIds": [
        166
      ],
      "name": "Работа 581",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 1,
      "forwardCost": 2708,
      "backwardCost": 6402,
      "durationCost": 6113,
      "currentCost": 4999,
      "childrenCost": 2675
    },
    {
      "id": 582,
      "parentIds": [
        165
      ],
      "name": "Работа 582",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 27,
      "forwardCost": 7781,
      "backwardCost": 5949,
      "durationCost": 5957,
      "currentCost": 4368,
      "childrenCost": 8255
    },
    {
      "id": 583,
      "parentIds": [
        220
      ],
      "name": "Работа 583",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 27,
      "forwardCost": 3193,
      "backwardCost": 8732,
      "durationCost": 2980,
      "currentCost": 5362,
      "childrenCost": 3192
    },
    {
      "id": 584,
      "parentIds": [
        164
      ],
      "name": "Работа 584",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 20,
      "forwardCost": 8628,
      "backwardCost": 6431,
      "durationCost": 977,
      "currentCost": 2017,
      "childrenCost": 661
    },
    {
      "id": 585,
      "parentIds": [
        91
      ],
      "name": "Работа 585",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 10,
      "forwardCost": 3352,
      "backwardCost": 3669,
      "durationCost": 4683,
      "currentCost": 8634,
      "childrenCost": 1661
    },
    {
      "id": 586,
      "parentIds": [
        119
      ],
      "name": "Работа 586",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 2,
      "forwardCost": 8229,
      "backwardCost": 5103,
      "durationCost": 1060,
      "currentCost": 6621,
      "childrenCost": 4924
    },
    {
      "id": 587,
      "parentIds": [
        162
      ],
      "name": "Работа 587",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 23,
      "forwardCost": 1146,
      "backwardCost": 2716,
      "durationCost": 1838,
      "currentCost": 1335,
      "childrenCost": 5399
    },
    {
      "id": 588,
      "parentIds": [
        137
      ],
      "name": "Работа 588",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 27,
      "forwardCost": 1443,
      "backwardCost": 8288,
      "durationCost": 8238,
      "currentCost": 7174,
      "childrenCost": 7505
    },
    {
      "id": 589,
      "parentIds": [
        64
      ],
      "name": "Работа 589",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 30,
      "forwardCost": 2424,
      "backwardCost": 2936,
      "durationCost": 3033,
      "currentCost": 3003,
      "childrenCost": 3380
    },
    {
      "id": 590,
      "parentIds": [
        176
      ],
      "name": "Работа 590",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 23,
      "forwardCost": 4734,
      "backwardCost": 3419,
      "durationCost": 8942,
      "currentCost": 926,
      "childrenCost": 5106
    },
    {
      "id": 591,
      "parentIds": [
        144
      ],
      "name": "Работа 591",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 6,
      "forwardCost": 7260,
      "backwardCost": 4519,
      "durationCost": 4005,
      "currentCost": 5984,
      "childrenCost": 2943
    },
    {
      "id": 592,
      "parentIds": [
        209
      ],
      "name": "Работа 592",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 23,
      "forwardCost": 5012,
      "backwardCost": 1515,
      "durationCost": 1484,
      "currentCost": 7990,
      "childrenCost": 6497
    },
    {
      "id": 593,
      "parentIds": [
        214
      ],
      "name": "Работа 593",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 26,
      "forwardCost": 1730,
      "backwardCost": 4426,
      "durationCost": 3769,
      "currentCost": 8857,
      "childrenCost": 5243
    },
    {
      "id": 594,
      "parentIds": [
        152
      ],
      "name": "Работа 594",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 7,
      "forwardCost": 2314,
      "backwardCost": 3776,
      "durationCost": 7784,
      "currentCost": 863,
      "childrenCost": 5176
    },
    {
      "id": 595,
      "parentIds": [
        141
      ],
      "name": "Работа 595",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 24,
      "forwardCost": 3257,
      "backwardCost": 5586,
      "durationCost": 2842,
      "currentCost": 8912,
      "childrenCost": 3917
    },
    {
      "id": 596,
      "parentIds": [
        60
      ],
      "name": "Работа 596",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 9,
      "forwardCost": 3104,
      "backwardCost": 5363,
      "durationCost": 8502,
      "currentCost": 522,
      "childrenCost": 8559
    },
    {
      "id": 597,
      "parentIds": [
        101
      ],
      "name": "Работа 597",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 24,
      "forwardCost": 2386,
      "backwardCost": 1764,
      "durationCost": 8817,
      "currentCost": 2635,
      "childrenCost": 5838
    },
    {
      "id": 598,
      "parentIds": [
        154
      ],
      "name": "Работа 598",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 17,
      "forwardCost": 7750,
      "backwardCost": 5063,
      "durationCost": 5435,
      "currentCost": 3640,
      "childrenCost": 365
    },
    {
      "id": 599,
      "parentIds": [
        36
      ],
      "name": "Работа 599",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 1,
      "forwardCost": 6817,
      "backwardCost": 1475,
      "durationCost": 3163,
      "currentCost": 5242,
      "childrenCost": 988
    },
    {
      "id": 600,
      "parentIds": [
        46
      ],
      "name": "Работа 600",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 10,
      "forwardCost": 1171,
      "backwardCost": 7864,
      "durationCost": 4530,
      "currentCost": 4473,
      "childrenCost": 2309
    },
    {
      "id": 601,
      "parentIds": [
        235
      ],
      "name": "Работа 601",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 13,
      "forwardCost": 6867,
      "backwardCost": 1323,
      "durationCost": 3135,
      "currentCost": 381,
      "childrenCost": 3858
    },
    {
      "id": 602,
      "parentIds": [
        113
      ],
      "name": "Работа 602",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 15,
      "forwardCost": 3187,
      "backwardCost": 6764,
      "durationCost": 1583,
      "currentCost": 8357,
      "childrenCost": 4064
    },
    {
      "id": 603,
      "parentIds": [
        101
      ],
      "name": "Работа 603",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 7,
      "forwardCost": 4697,
      "backwardCost": 243,
      "durationCost": 8010,
      "currentCost": 7310,
      "childrenCost": 1351
    },
    {
      "id": 604,
      "parentIds": [
        180
      ],
      "name": "Работа 604",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 4,
      "forwardCost": 3183,
      "backwardCost": 2376,
      "durationCost": 8846,
      "currentCost": 4576,
      "childrenCost": 2041
    },
    {
      "id": 605,
      "parentIds": [
        120
      ],
      "name": "Работа 605",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 11,
      "forwardCost": 4028,
      "backwardCost": 359,
      "durationCost": 253,
      "currentCost": 6953,
      "childrenCost": 431
    },
    {
      "id": 606,
      "parentIds": [
        102
      ],
      "name": "Работа 606",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 17,
      "forwardCost": 6438,
      "backwardCost": 3953,
      "durationCost": 1026,
      "currentCost": 440,
      "childrenCost": 6995
    },
    {
      "id": 607,
      "parentIds": [
        208
      ],
      "name": "Работа 607",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 10,
      "forwardCost": 2551,
      "backwardCost": 6514,
      "durationCost": 5364,
      "currentCost": 413,
      "childrenCost": 5638
    },
    {
      "id": 608,
      "parentIds": [
        130
      ],
      "name": "Работа 608",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 12,
      "forwardCost": 641,
      "backwardCost": 5747,
      "durationCost": 3343,
      "currentCost": 6947,
      "childrenCost": 1646
    },
    {
      "id": 609,
      "parentIds": [
        104
      ],
      "name": "Работа 609",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 9,
      "forwardCost": 4441,
      "backwardCost": 7545,
      "durationCost": 2745,
      "currentCost": 5454,
      "childrenCost": 5361
    },
    {
      "id": 610,
      "parentIds": [
        212
      ],
      "name": "Работа 610",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 26,
      "forwardCost": 8997,
      "backwardCost": 4837,
      "durationCost": 5895,
      "currentCost": 1565,
      "childrenCost": 3528
    },
    {
      "id": 611,
      "parentIds": [
        206
      ],
      "name": "Работа 611",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 11,
      "forwardCost": 8285,
      "backwardCost": 1582,
      "durationCost": 6080,
      "currentCost": 341,
      "childrenCost": 6986
    },
    {
      "id": 612,
      "parentIds": [
        213
      ],
      "name": "Работа 612",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 11,
      "forwardCost": 7163,
      "backwardCost": 917,
      "durationCost": 7818,
      "currentCost": 5525,
      "childrenCost": 7527
    },
    {
      "id": 613,
      "parentIds": [
        80
      ],
      "name": "Работа 613",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 29,
      "forwardCost": 215,
      "backwardCost": 6278,
      "durationCost": 8777,
      "currentCost": 1943,
      "childrenCost": 3848
    },
    {
      "id": 614,
      "parentIds": [
        40
      ],
      "name": "Работа 614",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 9,
      "forwardCost": 3062,
      "backwardCost": 7990,
      "durationCost": 4226,
      "currentCost": 6594,
      "childrenCost": 5703
    },
    {
      "id": 615,
      "parentIds": [
        133
      ],
      "name": "Работа 615",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 4,
      "forwardCost": 5369,
      "backwardCost": 7093,
      "durationCost": 6495,
      "currentCost": 6071,
      "childrenCost": 1357
    },
    {
      "id": 616,
      "parentIds": [
        146
      ],
      "name": "Работа 616",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 30,
      "forwardCost": 5661,
      "backwardCost": 8539,
      "durationCost": 6308,
      "currentCost": 4709,
      "childrenCost": 7941
    },
    {
      "id": 617,
      "parentIds": [
        196
      ],
      "name": "Работа 617",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 28,
      "forwardCost": 3266,
      "backwardCost": 231,
      "durationCost": 3399,
      "currentCost": 763,
      "childrenCost": 7420
    },
    {
      "id": 618,
      "parentIds": [
        89
      ],
      "name": "Работа 618",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 15,
      "forwardCost": 7668,
      "backwardCost": 5692,
      "durationCost": 2179,
      "currentCost": 1601,
      "childrenCost": 4340
    },
    {
      "id": 619,
      "parentIds": [
        77
      ],
      "name": "Работа 619",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 13,
      "forwardCost": 7408,
      "backwardCost": 6430,
      "durationCost": 1235,
      "currentCost": 3337,
      "childrenCost": 1260
    },
    {
      "id": 620,
      "parentIds": [
        213
      ],
      "name": "Работа 620",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 23,
      "forwardCost": 190,
      "backwardCost": 4752,
      "durationCost": 1866,
      "currentCost": 6133,
      "childrenCost": 7019
    },
    {
      "id": 621,
      "parentIds": [
        115
      ],
      "name": "Работа 621",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 14,
      "forwardCost": 6530,
      "backwardCost": 7387,
      "durationCost": 7247,
      "currentCost": 6021,
      "childrenCost": 6137
    },
    {
      "id": 622,
      "parentIds": [
        170
      ],
      "name": "Работа 622",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 14,
      "forwardCost": 7467,
      "backwardCost": 1443,
      "durationCost": 5131,
      "currentCost": 1026,
      "childrenCost": 6371
    },
    {
      "id": 623,
      "parentIds": [
        206
      ],
      "name": "Работа 623",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 25,
      "forwardCost": 369,
      "backwardCost": 4801,
      "durationCost": 4280,
      "currentCost": 6253,
      "childrenCost": 7890
    },
    {
      "id": 624,
      "parentIds": [
        78
      ],
      "name": "Работа 624",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 6,
      "forwardCost": 7911,
      "backwardCost": 7716,
      "durationCost": 8437,
      "currentCost": 3206,
      "childrenCost": 6749
    },
    {
      "id": 625,
      "parentIds": [
        60
      ],
      "name": "Работа 625",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 2,
      "forwardCost": 4270,
      "backwardCost": 2460,
      "durationCost": 5289,
      "currentCost": 4069,
      "childrenCost": 8980
    },
    {
      "id": 626,
      "parentIds": [
        173
      ],
      "name": "Работа 626",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 19,
      "forwardCost": 5449,
      "backwardCost": 6641,
      "durationCost": 5938,
      "currentCost": 5326,
      "childrenCost": 1538
    },
    {
      "id": 627,
      "parentIds": [
        115
      ],
      "name": "Работа 627",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 6,
      "forwardCost": 6600,
      "backwardCost": 4477,
      "durationCost": 1559,
      "currentCost": 8975,
      "childrenCost": 7308
    },
    {
      "id": 628,
      "parentIds": [
        126
      ],
      "name": "Работа 628",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 20,
      "forwardCost": 8396,
      "backwardCost": 6705,
      "durationCost": 4966,
      "currentCost": 1165,
      "childrenCost": 1713
    },
    {
      "id": 629,
      "parentIds": [
        134
      ],
      "name": "Работа 629",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 10,
      "forwardCost": 963,
      "backwardCost": 4205,
      "durationCost": 5580,
      "currentCost": 5112,
      "childrenCost": 7219
    },
    {
      "id": 630,
      "parentIds": [
        110
      ],
      "name": "Работа 630",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 25,
      "forwardCost": 8145,
      "backwardCost": 7565,
      "durationCost": 4903,
      "currentCost": 2670,
      "childrenCost": 3583
    },
    {
      "id": 631,
      "parentIds": [
        58
      ],
      "name": "Работа 631",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 3,
      "forwardCost": 3950,
      "backwardCost": 8747,
      "durationCost": 1495,
      "currentCost": 623,
      "childrenCost": 5283
    },
    {
      "id": 632,
      "parentIds": [
        174
      ],
      "name": "Работа 632",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 9,
      "forwardCost": 3448,
      "backwardCost": 5091,
      "durationCost": 1236,
      "currentCost": 4877,
      "childrenCost": 7748
    },
    {
      "id": 633,
      "parentIds": [
        172
      ],
      "name": "Работа 633",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 3,
      "forwardCost": 7323,
      "backwardCost": 1207,
      "durationCost": 6645,
      "currentCost": 5688,
      "childrenCost": 394
    },
    {
      "id": 634,
      "parentIds": [
        200
      ],
      "name": "Работа 634",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 24,
      "forwardCost": 536,
      "backwardCost": 7008,
      "durationCost": 1590,
      "currentCost": 2668,
      "childrenCost": 7788
    },
    {
      "id": 635,
      "parentIds": [
        150
      ],
      "name": "Работа 635",
      "startDate": "2020-11-14T00:53:42.319Z",
      "duration": 6,
      "minDuration": 24,
      "forwardCost": 1810,
      "backwardCost": 8428,
      "durationCost": 3972,
      "currentCost": 1758,
      "childrenCost": 8205
    }
  ];
  selected: BehaviorSubject<number> = new BehaviorSubject<number>(2)
  opened: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([null, 3])
  mockData: BehaviorSubject<any[]> = new BehaviorSubject([...this.MOCK_DATA]);

  constructor() {
  }
}
