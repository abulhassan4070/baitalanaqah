import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabList,
  HStack,
  Spacer,
  Heading,
  Button,
  SimpleGrid,
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Text,
  Image,
  Icon,
  TabIndicator,
} from "@chakra-ui/react";
import { useState } from "react";
import "../../assets/css/customize.css";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function CustomizePage() {
  const [tabIndex, setTabIndex] = useState(0);
  var fabricsData = [
    {
      image: 894,
      name: "Fabric 894",
      price: 123,
    },
    {
      image: 141,
      name: "Fabric 141",
      price: 123,
    },
    {
      image: 674,
      name: "Fabric 674",
      price: 123,
    },
    {
      image: 2197,
      name: "Fabric 2197",
      price: 123,
    },
    {
      image: 2192,
      name: "Fabric 2192",
      price: 123,
    },
    {
      image: 2103,
      name: "Fabric 2103",
      price: 123,
    },
    {
      image: 2251,
      name: "Fabric 2251",
      price: 123,
    },
    {
      image: 2277,
      name: "Fabric 2277",
      price: 123,
    },
    {
      image: 3186,
      name: "Fabric 3186",
      price: 123,
    },
    {
      image: 3179,
      name: "Fabric 3179",
      price: 123,
    },
    {
      image: 3161,
      name: "Fabric 3161",
      price: 123,
    },
    {
      image: 1645,
      name: "Fabric 1645",
      price: 123,
    },
    {
      image: 2311,
      name: "Fabric 2311",
      price: 123,
    },
    {
      image: 778,
      name: "Fabric 778",
      price: 123,
    },
    {
      image: 952,
      name: "Fabric 952",
      price: 123,
    },
    {
      image: 772,
      name: "Fabric 772",
      price: 123,
    },
    {
      image: 3198,
      name: "Fabric 3198",
      price: 123,
    },
    {
      image: 3199,
      name: "Fabric 3199",
      price: 123,
    },
    {
      image: 3104,
      name: "Fabric 3104",
      price: 123,
    },
    {
      image: 1294,
      name: "Fabric 1294",
      price: 123,
    },
    {
      image: 3160,
      name: "Fabric 3160",
      price: 123,
    },
    {
      image: 2823,
      name: "Fabric 2823",
      price: 123,
    },
    {
      image: 2839,
      name: "Fabric 2839",
      price: 123,
    },
    {
      image: 2837,
      name: "Fabric 2837",
      price: 123,
    },
    {
      image: 3190,
      name: "Fabric 3190",
      price: 123,
    },
    {
      image: 3163,
      name: "Fabric 3163",
      price: 123,
    },
    {
      image: 3162,
      name: "Fabric 3162",
      price: 123,
    },
    {
      image: 3191,
      name: "Fabric 3191",
      price: 123,
    },
    {
      image: 2465,
      name: "Fabric 2465",
      price: 123,
    },
    {
      image: 2256,
      name: "Fabric 2256",
      price: 123,
    },
    {
      image: 2078,
      name: "Fabric 2078",
      price: 123,
    },
    {
      image: 3169,
      name: "Fabric 3169",
      price: 123,
    },
    {
      image: 3200,
      name: "Fabric 3200",
      price: 123,
    },
    {
      image: 3196,
      name: "Fabric 3196",
      price: 123,
    },
    {
      image: 3195,
      name: "Fabric 3195",
      price: 123,
    },
    {
      image: 3183,
      name: "Fabric 3183",
      price: 123,
    },
    {
      image: 3189,
      name: "Fabric 3189",
      price: 123,
    },
    {
      image: 3184,
      name: "Fabric 3184",
      price: 123,
    },
    {
      image: 3187,
      name: "Fabric 3187",
      price: 123,
    },
    {
      image: 3185,
      name: "Fabric 3185",
      price: 123,
    },
    {
      image: 3194,
      name: "Fabric 3194",
      price: 123,
    },
    {
      image: 3188,
      name: "Fabric 3188",
      price: 123,
    },
    {
      image: 1801,
      name: "Fabric 1801",
      price: 123,
    },
    {
      image: 1803,
      name: "Fabric 1803",
      price: 123,
    },
    {
      image: 1804,
      name: "Fabric 1804",
      price: 123,
    },
    {
      image: 2349,
      name: "Fabric 2349",
      price: 123,
    },
    {
      image: 2140,
      name: "Fabric 2140",
      price: 123,
    },
    {
      image: 1237,
      name: "Fabric 1237",
      price: 123,
    },
    {
      image: 82,
      name: "Fabric 82",
      price: 123,
    },
    {
      image: 1884,
      name: "Fabric 1884",
      price: 123,
    },
    {
      image: 2969,
      name: "Fabric 2969",
      price: 123,
    },
    {
      image: 1830,
      name: "Fabric 1830",
      price: 123,
    },
    {
      image: 2802,
      name: "Fabric 2802",
      price: 123,
    },
    {
      image: 2838,
      name: "Fabric 2838",
      price: 123,
    },
    {
      image: 1856,
      name: "Fabric 1856",
      price: 123,
    },
    {
      image: 1217,
      name: "Fabric 1217",
      price: 123,
    },
    {
      image: 3171,
      name: "Fabric 3171",
      price: 123,
    },
    {
      image: 3164,
      name: "Fabric 3164",
      price: 123,
    },
    {
      image: 2356,
      name: "Fabric 2356",
      price: 123,
    },
    {
      image: 2825,
      name: "Fabric 2825",
      price: 123,
    },
    {
      image: 3180,
      name: "Fabric 3180",
      price: 123,
    },
    {
      image: 3181,
      name: "Fabric 3181",
      price: 123,
    },
    {
      image: 2498,
      name: "Fabric 2498",
      price: 123,
    },
    {
      image: 2829,
      name: "Fabric 2829",
      price: 123,
    },
    {
      image: 3165,
      name: "Fabric 3165",
      price: 123,
    },
    {
      image: 3166,
      name: "Fabric 3166",
      price: 123,
    },
    {
      image: 2832,
      name: "Fabric 2832",
      price: 123,
    },
    {
      image: 2830,
      name: "Fabric 2830",
      price: 123,
    },
    {
      image: 2686,
      name: "Fabric 2686",
      price: 123,
    },
    {
      image: 607,
      name: "Fabric 607",
      price: 123,
    },
    {
      image: 2809,
      name: "Fabric 2809",
      price: 123,
    },
    {
      image: 2848,
      name: "Fabric 2848",
      price: 123,
    },
    {
      image: 1994,
      name: "Fabric 1994",
      price: 123,
    },
    {
      image: 482,
      name: "Fabric 482",
      price: 123,
    },
    {
      image: 2804,
      name: "Fabric 2804",
      price: 123,
    },
    {
      image: 2135,
      name: "Fabric 2135",
      price: 123,
    },
    {
      image: 2449,
      name: "Fabric 2449",
      price: 123,
    },
    {
      image: 3178,
      name: "Fabric 3178",
      price: 123,
    },
    {
      image: 2851,
      name: "Fabric 2851",
      price: 123,
    },
    {
      image: 3182,
      name: "Fabric 3182",
      price: 123,
    },
    {
      image: 2853,
      name: "Fabric 2853",
      price: 123,
    },
    {
      image: 2796,
      name: "Fabric 2796",
      price: 123,
    },
    {
      image: 2632,
      name: "Fabric 2632",
      price: 123,
    },
    {
      image: 3174,
      name: "Fabric 3174",
      price: 123,
    },
    {
      image: 3175,
      name: "Fabric 3175",
      price: 123,
    },
    {
      image: 3173,
      name: "Fabric 3173",
      price: 123,
    },
    {
      image: 3170,
      name: "Fabric 3170",
      price: 123,
    },
    {
      image: 3172,
      name: "Fabric 3172",
      price: 123,
    },
    {
      image: 2966,
      name: "Fabric 2966",
      price: 123,
    },
    {
      image: 2964,
      name: "Fabric 2964",
      price: 123,
    },
    {
      image: 144,
      name: "Fabric 144",
      price: 123,
    },
    {
      image: 2854,
      name: "Fabric 2854",
      price: 123,
    },
    {
      image: 2212,
      name: "Fabric 2212",
      price: 123,
    },
    {
      image: 2501,
      name: "Fabric 2501",
      price: 123,
    },
    {
      image: 2965,
      name: "Fabric 2965",
      price: 123,
    },
    {
      image: 2967,
      name: "Fabric 2967",
      price: 123,
    },
    {
      image: 1997,
      name: "Fabric 1997",
      price: 123,
    },
    {
      image: 157,
      name: "Fabric 157",
      price: 123,
    },
    {
      image: 2278,
      name: "Fabric 2278",
      price: 123,
    },
    {
      image: 2988,
      name: "Fabric 2988",
      price: 123,
    },
    {
      image: 3167,
      name: "Fabric 3167",
      price: 123,
    },
    {
      image: 3168,
      name: "Fabric 3168",
      price: 123,
    },
    {
      image: 2797,
      name: "Fabric 2797",
      price: 123,
    },
    {
      image: 2827,
      name: "Fabric 2827",
      price: 123,
    },
    {
      image: 2822,
      name: "Fabric 2822",
      price: 123,
    },
    {
      image: 2828,
      name: "Fabric 2828",
      price: 123,
    },
    {
      image: 2833,
      name: "Fabric 2833",
      price: 123,
    },
    {
      image: 2073,
      name: "Fabric 2073",
      price: 123,
    },
    {
      image: 2567,
      name: "Fabric 2567",
      price: 123,
    },
    {
      image: 3177,
      name: "Fabric 3177",
      price: 123,
    },
    {
      image: 2075,
      name: "Fabric 2075",
      price: 123,
    },
    {
      image: 3176,
      name: "Fabric 3176",
      price: 123,
    },
    {
      image: 2499,
      name: "Fabric 2499",
      price: 123,
    },
    {
      image: 2795,
      name: "Fabric 2795",
      price: 123,
    },
    {
      image: 2971,
      name: "Fabric 2971",
      price: 123,
    },
    {
      image: 2663,
      name: "Fabric 2663",
      price: 123,
    },
    {
      image: 2025,
      name: "Fabric 2025",
      price: 123,
    },
    {
      image: 2310,
      name: "Fabric 2310",
      price: 123,
    },
    {
      image: 2346,
      name: "Fabric 2346",
      price: 123,
    },
    {
      image: 2462,
      name: "Fabric 2462",
      price: 123,
    },
    {
      image: 2199,
      name: "Fabric 2199",
      price: 123,
    },
    {
      image: 949,
      name: "Fabric 949",
      price: 123,
    },
    {
      image: 2982,
      name: "Fabric 2982",
      price: 123,
    },
    {
      image: 2973,
      name: "Fabric 2973",
      price: 123,
    },
    {
      image: 2852,
      name: "Fabric 2852",
      price: 123,
    },
    {
      image: 2977,
      name: "Fabric 2977",
      price: 123,
    },
    {
      image: 2974,
      name: "Fabric 2974",
      price: 123,
    },
    {
      image: 1513,
      name: "Fabric 1513",
      price: 123,
    },
    {
      image: 2972,
      name: "Fabric 2972",
      price: 123,
    },
    {
      image: 2984,
      name: "Fabric 2984",
      price: 123,
    },
    {
      image: 2978,
      name: "Fabric 2978",
      price: 123,
    },
    {
      image: 2975,
      name: "Fabric 2975",
      price: 123,
    },
    {
      image: 2983,
      name: "Fabric 2983",
      price: 123,
    },
    {
      image: 2981,
      name: "Fabric 2981",
      price: 123,
    },
    {
      image: 2855,
      name: "Fabric 2855",
      price: 123,
    },
    {
      image: 2970,
      name: "Fabric 2970",
      price: 123,
    },
    {
      image: 2976,
      name: "Fabric 2976",
      price: 123,
    },
    {
      image: 2985,
      name: "Fabric 2985",
      price: 123,
    },
    {
      image: 2986,
      name: "Fabric 2986",
      price: 123,
    },
    {
      image: 2132,
      name: "Fabric 2132",
      price: 123,
    },
    {
      image: 2979,
      name: "Fabric 2979",
      price: 123,
    },
    {
      image: 1511,
      name: "Fabric 1511",
      price: 123,
    },
    {
      image: 1802,
      name: "Fabric 1802",
      price: 123,
    },
    {
      image: 2649,
      name: "Fabric 2649",
      price: 123,
    },
    {
      image: 2143,
      name: "Fabric 2143",
      price: 123,
    },
    {
      image: 2144,
      name: "Fabric 2144",
      price: 123,
    },
    {
      image: 2636,
      name: "Fabric 2636",
      price: 123,
    },
    {
      image: 2142,
      name: "Fabric 2142",
      price: 123,
    },
    {
      image: 2637,
      name: "Fabric 2637",
      price: 123,
    },
    {
      image: 2638,
      name: "Fabric 2638",
      price: 123,
    },
    {
      image: 2994,
      name: "Fabric 2994",
      price: 123,
    },
    {
      image: 2993,
      name: "Fabric 2993",
      price: 123,
    },
    {
      image: 2338,
      name: "Fabric 2338",
      price: 123,
    },
    {
      image: 2992,
      name: "Fabric 2992",
      price: 123,
    },
    {
      image: 2991,
      name: "Fabric 2991",
      price: 123,
    },
    {
      image: 2990,
      name: "Fabric 2990",
      price: 123,
    },
    {
      image: 2684,
      name: "Fabric 2684",
      price: 123,
    },
    {
      image: 1979,
      name: "Fabric 1979",
      price: 123,
    },
    {
      image: 1980,
      name: "Fabric 1980",
      price: 123,
    },
    {
      image: 1310,
      name: "Fabric 1310",
      price: 123,
    },
    {
      image: 2341,
      name: "Fabric 2341",
      price: 123,
    },
    {
      image: 1885,
      name: "Fabric 1885",
      price: 123,
    },
    {
      image: 1154,
      name: "Fabric 1154",
      price: 123,
    },
    {
      image: 865,
      name: "Fabric 865",
      price: 123,
    },
    {
      image: 2648,
      name: "Fabric 2648",
      price: 123,
    },
    {
      image: 2635,
      name: "Fabric 2635",
      price: 123,
    },
    {
      image: 2651,
      name: "Fabric 2651",
      price: 123,
    },
    {
      image: 2640,
      name: "Fabric 2640",
      price: 123,
    },
    {
      image: 2980,
      name: "Fabric 2980",
      price: 123,
    },
    {
      image: 2674,
      name: "Fabric 2674",
      price: 123,
    },
    {
      image: 2672,
      name: "Fabric 2672",
      price: 123,
    },
    {
      image: 2670,
      name: "Fabric 2670",
      price: 123,
    },
    {
      image: 2673,
      name: "Fabric 2673",
      price: 123,
    },
    {
      image: 2667,
      name: "Fabric 2667",
      price: 123,
    },
    {
      image: 2669,
      name: "Fabric 2669",
      price: 123,
    },
    {
      image: 2284,
      name: "Fabric 2284",
      price: 123,
    },
    {
      image: 2680,
      name: "Fabric 2680",
      price: 123,
    },
    {
      image: 2794,
      name: "Fabric 2794",
      price: 123,
    },
    {
      image: 2671,
      name: "Fabric 2671",
      price: 123,
    },
    {
      image: 2224,
      name: "Fabric 2224",
      price: 123,
    },
    {
      image: 2662,
      name: "Fabric 2662",
      price: 123,
    },
    {
      image: 2226,
      name: "Fabric 2226",
      price: 123,
    },
    {
      image: 2681,
      name: "Fabric 2681",
      price: 123,
    },
    {
      image: 2845,
      name: "Fabric 2845",
      price: 123,
    },
    {
      image: 2682,
      name: "Fabric 2682",
      price: 123,
    },
    {
      image: 2714,
      name: "Fabric 2714",
      price: 123,
    },
    {
      image: 2225,
      name: "Fabric 2225",
      price: 123,
    },
    {
      image: 2675,
      name: "Fabric 2675",
      price: 123,
    },
    {
      image: 2987,
      name: "Fabric 2987",
      price: 123,
    },
    {
      image: 2968,
      name: "Fabric 2968",
      price: 123,
    },
    {
      image: 2989,
      name: "Fabric 2989",
      price: 123,
    },
    {
      image: 2456,
      name: "Fabric 2456",
      price: 123,
    },
    {
      image: 2790,
      name: "Fabric 2790",
      price: 123,
    },
    {
      image: 2801,
      name: "Fabric 2801",
      price: 123,
    },
    {
      image: 2193,
      name: "Fabric 2193",
      price: 123,
    },
    {
      image: 2254,
      name: "Fabric 2254",
      price: 123,
    },
    {
      image: 2678,
      name: "Fabric 2678",
      price: 123,
    },
    {
      image: 2677,
      name: "Fabric 2677",
      price: 123,
    },
    {
      image: 2113,
      name: "Fabric 2113",
      price: 123,
    },
    {
      image: 2811,
      name: "Fabric 2811",
      price: 123,
    },
    {
      image: 2813,
      name: "Fabric 2813",
      price: 123,
    },
    {
      image: 2071,
      name: "Fabric 2071",
      price: 123,
    },
    {
      image: 2689,
      name: "Fabric 2689",
      price: 123,
    },
    {
      image: 2812,
      name: "Fabric 2812",
      price: 123,
    },
    {
      image: 2461,
      name: "Fabric 2461",
      price: 123,
    },
    {
      image: 2446,
      name: "Fabric 2446",
      price: 123,
    },
    {
      image: 2661,
      name: "Fabric 2661",
      price: 123,
    },
    {
      image: 2687,
      name: "Fabric 2687",
      price: 123,
    },
    {
      image: 2668,
      name: "Fabric 2668",
      price: 123,
    },
    {
      image: 2653,
      name: "Fabric 2653",
      price: 123,
    },
    {
      image: 2690,
      name: "Fabric 2690",
      price: 123,
    },
    {
      image: 2688,
      name: "Fabric 2688",
      price: 123,
    },
    {
      image: 78,
      name: "Fabric 78",
      price: 123,
    },
    {
      image: 2683,
      name: "Fabric 2683",
      price: 123,
    },
    {
      image: 2630,
      name: "Fabric 2630",
      price: 123,
    },
    {
      image: 2459,
      name: "Fabric 2459",
      price: 123,
    },
    {
      image: 789,
      name: "Fabric 789",
      price: 123,
    },
    {
      image: 1071,
      name: "Fabric 1071",
      price: 123,
    },
    {
      image: 1070,
      name: "Fabric 1070",
      price: 123,
    },
    {
      image: 1072,
      name: "Fabric 1072",
      price: 123,
    },
    {
      image: 2676,
      name: "Fabric 2676",
      price: 123,
    },
    {
      image: 1902,
      name: "Fabric 1902",
      price: 123,
    },
    {
      image: 2847,
      name: "Fabric 2847",
      price: 123,
    },
  ];
  const [fabric, setFabric] = useState(fabricsData[0].image);

  var liningData = [
    {
      image: 134,
      name: "Jumbie",
    },
    {
      image: 100,
      name: "Volda",
    },
    {
      image: 101,
      name: "Gloppen",
    },
    {
      image: 132,
      name: "Hunter",
    },
    {
      image: 104,
      name: "Vestnes",
    },
    {
      image: 102,
      name: "Kallset",
    },
    {
      image: 103,
      name: "Roald",
    },
    {
      image: 133,
      name: "Merlin",
    },
    {
      image: 171,
      name: "Doran",
    },
    {
      image: 168,
      name: "Battler",
    },
    {
      image: 189,
      name: "Zain",
    },
    {
      image: 217,
      name: "Hari",
    },
    {
      image: 219,
      name: "Evie",
    },
    {
      image: 218,
      name: "Zubair",
    },
    {
      image: 215,
      name: "Swanson",
    },
    {
      image: 216,
      name: "Halliday",
    },
    {
      image: 214,
      name: "Erickson",
    },
    {
      image: 184,
      name: "Charlotte",
    },
    {
      image: 165,
      name: "Timur",
    },
    {
      image: 111,
      name: "Lipari",
    },
    {
      image: 175,
      name: "Hagen",
    },
    {
      image: 169,
      name: "Aybek",
    },
    {
      image: 172,
      name: "Jinny",
    },
    {
      image: 164,
      name: "Darina",
    },
    {
      image: 167,
      name: "Hilda",
    },
    {
      image: 222,
      name: "Parkleys",
    },
    {
      image: 136,
      name: "Branson",
    },
    {
      image: 224,
      name: "Claydens",
    },
    {
      image: 213,
      name: "Kairo",
    },
    {
      image: 220,
      name: "Boyles",
    },
    {
      image: 227,
      name: "Dorsets",
    },
    {
      image: 228,
      name: "Azuras",
    },
    {
      image: 194,
      name: "Laxton",
    },
    {
      image: 196,
      name: "Beray",
    },
    {
      image: 159,
      name: "Azura",
    },
    {
      image: 221,
      name: "Swaless",
    },
    {
      image: 231,
      name: "Denholms",
    },
    {
      image: 161,
      name: "Shatle",
    },
    {
      image: 230,
      name: "Tindalls",
    },
    {
      image: 223,
      name: "Shelleys",
    },
    {
      image: 198,
      name: "Crosby",
    },
    {
      image: 229,
      name: "Graunds",
    },
    {
      image: 191,
      name: "Milne",
    },
    {
      image: 233,
      name: "Bradlys",
    },
    {
      image: 235,
      name: "Orviles",
    },
    {
      image: 143,
      name: "Rischer",
    },
    {
      image: 152,
      name: "Verrall",
    },
    {
      image: 157,
      name: "Tera",
    },
    {
      image: 162,
      name: "Gritt",
    },
    {
      image: 192,
      name: "Fearne",
    },
    {
      image: 193,
      name: "Hensonn",
    },
    {
      image: 195,
      name: "Lacey",
    },
    {
      image: 197,
      name: "Munroe",
    },
    {
      image: 199,
      name: "Snella",
    },
    {
      image: 200,
      name: "Rayner",
    },
    {
      image: 226,
      name: "Horsts",
    },
    {
      image: 234,
      name: "Newburys",
    },
  ];
  const [lining, setLining] = useState(liningData[0].image);
  var pockets = [
    {
      image: "hip_pockets_patched",
      name: "Patched",
    },
    {
      image: "hip_pockets_with_flap",
      name: "With Flap",
    },
    {
      image: "hip_pockets_double_welt",
      name: "Double Welt",
    },
  ];
  const [pocket, setPocket] = useState(pockets[0].image);
  var buttonsData = [
    {
      image: 1,
      name: "Brown",
    },
    {
      image: 2,
      name: "Dark Grey",
    },
    {
      image: 3,
      name: "Navy Blue",
    },
    {
      image: 4,
      name: "Khaki",
    },
    {
      image: 5,
      name: "Off-white",
    },
    {
      image: 6,
      name: "Anthrazit",
    },
    {
      image: 50,
      name: "Shiny Gold Brass",
    },
    {
      image: 51,
      name: "Gold Brass",
    },
    {
      image: 52,
      name: "Silver Brass",
    },
    {
      image: 53,
      name: "Antique Silver Brass",
    },
  ];
  const [button, setButton] = useState(buttonsData[0].image);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleTabsClick = (i) => {
    setTabIndex(tabIndex + i);
  };

  const { t } = useTranslation();

  return (
    <>
      <SimpleGrid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
        }}
        gridTemplateRows={{
          base: "auto",
          md: "auto",
        }}
        gridTemplateAreas={{
          base: `'left' 'right'`,
          md: `'left right'`,
        }}
        spacing={0}
      >
        <Box
          position={"relative"}
          height={{
            base: "300px",
            md: "calc(100vh - 250px)",
            lg: "calc(100vh)",
          }}
          style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/" +
              fabric +
              "_fabric/front/interior+espalda_abajo+length_long.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/" +
              fabric +
              "_fabric/front/interior+espalda_arriba.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/linings/" +
              lining +
              "_fabric/front/interior+espalda_arriba.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/linings/" +
              lining +
              "_fabric/front/interior+espalda_abajo+length_long.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/etiquetas/negra.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/" +
              fabric +
              "_fabric/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/" +
              fabric +
              "_fabric/front/interior+sleeves.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/" +
              fabric +
              "_fabric/front/bottom_single_breasted+length_long+hemline_open.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/" +
              fabric +
              "_fabric/front/breast_pocket_classic.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />

          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/" +
              fabric +
              "_fabric/front/" +
              pocket +
              "+fit_slim.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />
          <Image
            src={
              "https://d2w9m16hs9jc37.cloudfront.net/3d/new_man/jacket/STD/Buttons/" +
              button +
              "/front/neck_single_breasted+buttons_2+lapel_medium+style_lapel_notch.png"
            }
            position={"absolute"}
            height={"100%"}
            width={"auto"}
            margin={"0 auto"}
          />
        </Box>
        <Box dir={i18n.dir()} borderLeft={"1px solid gray"}>
          <Tabs
            w={"full"}
            h={"max-content"}
            isLazy
            index={tabIndex}
            _activeLink={{
              bg: "gray.200",
            }}
            variant="soft-rounded"
            onChange={handleTabsChange}
          >
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="black"
              borderRadius="1px"
            />
            <TabList
              p={4}
              borderBottom={"1px solid gray"}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Tab>{t("custom.tab1.title")}</Tab>
              <Icon as={ArrowForwardIcon} />
              <Tab>{t("custom.tab2.title")}</Tab>
              <Icon as={ArrowForwardIcon} />
              <Tab>{t("custom.tab3.title")}</Tab>
              <Icon as={ArrowForwardIcon} />
              <Tab>Button</Tab>
              <Icon as={ArrowForwardIcon} />
              <Tab>{t("custom.tab5.title")}</Tab>
            </TabList>
            <TabPanels
              style={{
                borderBottom: "1px solid gray",
                height: "calc(100vh - 250px)",
                overflowY: "auto",
              }}
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <TabPanel>
                <Heading fontSize={20} py={4}>
                  {t("custom.tab1.subtitle")}
                </Heading>
                <SimpleGrid
                  columns={{
                    base: 2,
                    md: 3,
                    lg: 4,
                  }}
                  spacing={2}
                  py={4}
                >
                  {fabricsData.map((cFabric, index) => (
                    <Box
                      height={"200px"}
                      bgSize={"cover"}
                      position={"relative"}
                      key={index}
                      onClick={() => setFabric(cFabric.image)}
                      style={{
                        cursor: "pointer",
                        border:
                          fabric === cFabric.image ? "2px double black" : "",
                      }}
                    >
                      <Image
                        alt="[+]"
                        height={"100%"}
                        width={"100%"}
                        src={
                          "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/" +
                          cFabric.image +
                          "_huge_c300.jpg"
                        }
                      />
                      <Flex
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          left: "0",
                          right: "0",
                        }}
                        bg={"gray.100"}
                        p={2}
                        borderTop={"1px dashed black"}
                      >
                        <Text
                          fontSize={14}
                          flex="1"
                          textAlign="left"
                          noOfLines={1}
                        >
                          {cFabric.name}
                        </Text>
                        <Box as="span" flex="1" textAlign="right">
                          {cFabric.price}
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Heading fontSize={20} py={4}>
                  {t("custom.tab2.subtitle")}
                </Heading>
                <SimpleGrid
                  columns={{
                    base: 2,
                    md: 3,
                    lg: 4,
                  }}
                  spacing={2}
                  py={4}
                >
                  {liningData.map((cLining, index) => (
                    <Box
                      height={"200px"}
                      bgSize={"cover"}
                      position={"relative"}
                      key={index}
                      onClick={() => setLining(cLining.image)}
                      style={{
                        cursor: "pointer",
                        border:
                          cLining.image === lining ? "2px double black" : "",
                      }}
                    >
                      <Image
                        alt="[+]"
                        height={"100%"}
                        width={"100%"}
                        src={
                          "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/" +
                          cLining.image +
                          "_normal.jpg"
                        }
                      />
                      <Flex
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          left: "0",
                          right: "0",
                        }}
                        bg={"gray.100"}
                        p={2}
                        borderTop={"1px dashed black"}
                      >
                        <Text
                          fontSize={14}
                          flex="1"
                          textAlign="left"
                          noOfLines={1}
                        >
                          {cLining.name}
                        </Text>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Heading fontSize={20} py={4}>
                  {t("custom.tab3.subtitle")}
                </Heading>
                <Accordion allowToggle defaultIndex={[0]}>
                  <AccordionItem bg={"gray.200"} mb={8}>
                    <h2>
                      <AccordionButton p={4}>
                        <Flex w="full">
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab3.label1")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("")}
                          </Box>
                          <AccordionIcon />
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      mx={4}
                      borderTop={"1px dashed black"}
                    >
                      <Flex bg={"gray.100"} p={4}>
                        <Box as="span" flex="1" textAlign="left">
                          {t("custom.tab3.label1-1")}
                        </Box>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">Half</option>
                          <option value="2">Semi-full</option>
                          <option value="3">Full</option>
                        </select>
                      </Flex>
                      <Flex bg={"gray.100"} mt={4} p={4}>
                        <Box as="span" flex="1" textAlign="left">
                          {t("custom.tab3.label2")}
                        </Box>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">Shawl</option>
                          <option value="2">Slim Notch</option>
                          <option value="3">Slim Peak</option>
                          <option value="4">Notch</option>
                          <option value="5">Peak</option>
                        </select>
                      </Flex>

                      <Flex bg={"gray.100"} mt={4} p={4}>
                        <Box as="span" flex="1" textAlign="left">
                          Pockets
                        </Box>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setPocket(
                              pockets[parseInt(e.target.value) - 1].image
                            )
                          }
                        >
                          {pockets.map((pocket, index) => (
                            <option value={index + 1}>{pocket.name}</option>
                          ))}
                        </select>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Heading fontSize={20} py={4}>
                  Select Button style
                </Heading>
                <SimpleGrid
                  columns={{
                    base: 2,
                    md: 3,
                    lg: 4,
                  }}
                  spacing={2}
                  py={4}
                >
                  {buttonsData.map((cFabric, index) => (
                    <Box
                      height={"200px"}
                      bgSize={"cover"}
                      position={"relative"}
                      key={index}
                      onClick={() => setButton(cFabric.image)}
                      style={{
                        cursor: "pointer",
                        border:
                          button === cFabric.image ? "2px double black" : "",
                      }}
                    >
                      <Image
                        alt="[+]"
                        height={"100%"}
                        width={"100%"}
                        src={
                          "https://d2w9m16hs9jc37.cloudfront.net/images/man/suit/buttons_color/" +
                          cFabric.image +
                          ".jpg"
                        }
                      />
                      <Flex
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          left: "0",
                          right: "0",
                        }}
                        bg={"gray.100"}
                        p={2}
                        borderTop={"1px dashed black"}
                      >
                        <Text
                          fontSize={14}
                          flex="1"
                          textAlign="left"
                          noOfLines={1}
                        >
                          {cFabric.name}
                        </Text>
                        <Box as="span" flex="1" textAlign="right">
                          {cFabric.price}
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Heading fontSize={20} py={4}>
                  {t("custom.tab5.subtitle")}
                </Heading>
                <Heading fontSize={20} py={4}>
                  {t("custom.tab5.label1")}
                </Heading>
                <Text fontSize={18}>{t("custom.tab5.label1Sub")}</Text>
                <Flex
                  fontSize={14}
                  mt={4}
                  pb={3}
                  borderBottom={"1px"}
                  borderColor={"gray.200"}
                >
                  <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                    {t("custom.tab5.label1-1")}
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    {t("custom.tab5.text1-1")}
                  </Box>
                </Flex>
                <Flex
                  fontSize={14}
                  mt={4}
                  p={0}
                  pb={3}
                  borderBottom={"1px"}
                  borderColor={"gray.200"}
                >
                  <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                    {t("custom.tab5.label1-2")}
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    {t("custom.tab5.text1-2")}
                  </Box>
                </Flex>
                <Heading fontSize={16} py={4} mt={4}>
                  {t("custom.tab5.label2")}
                </Heading>
                <Text fontSize={18}>{t("custom.tab5.label2Sub")}</Text>
                <Flex
                  fontSize={14}
                  mt={4}
                  pb={3}
                  borderBottom={"1px"}
                  borderColor={"gray.200"}
                >
                  <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                    {t("custom.tab5.label2-1")}
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    {t("custom.tab5.text2-1")}
                  </Box>
                </Flex>
                <Flex
                  fontSize={14}
                  mt={4}
                  p={0}
                  pb={3}
                  borderBottom={"1px"}
                  borderColor={"gray.200"}
                >
                  <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                    {t("custom.tab5.label2-2")}
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    {t("custom.tab5.text2-2")}
                  </Box>
                </Flex>
                <Heading fontSize={16} py={4} mt={4}>
                  {t("custom.tab5.label3")}
                </Heading>
                <Text fontSize={18}>{t("custom.tab5.label3Sub")}</Text>
                <Flex
                  fontSize={14}
                  mt={4}
                  pb={3}
                  borderBottom={"1px"}
                  borderColor={"gray.200"}
                >
                  <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                    {t("custom.tab5.label3-1")}
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    {t("custom.tab5.text3-1")}
                  </Box>
                </Flex>
                <Flex
                  fontSize={14}
                  mt={4}
                  p={0}
                  pb={3}
                  borderBottom={"1px"}
                  borderColor={"gray.200"}
                >
                  <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                    {t("custom.tab5.label3-2")}
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    {t("custom.tab5.text3-2")}
                  </Box>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <HStack width={"full"} p={2}>
            <HStack
              as={Button}
              float={"left"}
              onClick={() => handleTabsClick(-1)}
              style={
                tabIndex === 0 ? { pointerEvents: "none", opacity: "0.4" } : {}
              }
            >
              <ArrowBackIcon />
              <span>{t("custom.prev")}</span>
            </HStack>
            <Spacer />
            <HStack
              as={Button}
              float={"right"}
              onClick={() => handleTabsClick(1)}
              style={
                tabIndex === 4 ? { pointerEvents: "none", opacity: "0.4" } : {}
              }
            >
              <span>{t("custom.next")}</span>
              <ArrowForwardIcon />
            </HStack>
          </HStack>
          <HStack float={"right"} className="buttonStyle" mx={2}>
            <span>{t("addToCart")}</span>
            <ArrowForwardIcon />
          </HStack>
        </Box>
      </SimpleGrid>
    </>
  );
}
