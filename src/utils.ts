import {
  FrostAndFireHotelImg,
  GeysirThermalFieldImg,
  GreenHouseHotelImg,
  InniImg,
  riverImg,
  waterfallImg,
  SkogafossWaterfallImg,
  iceCaveImg,
  HotelVikiImg,
  housesImg,
  ThingvellirImg,
} from 'assets/index';
import { DailyPlan, Highlight } from 'components/Highlights/types';

export const highlightsForGoldenCircleRegion: Highlight[] = [
  {
    label: 'Golden Circle Region',
    captions: ['Geysers', 'Waterfalls', 'Crater lakes'],
    withShowDailyPlansButton: false,
    description: `The Golden Circle in Iceland is a renowned tourist route that encompasses an array of 
        stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes 
        three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the 
        diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.`,
  },
  {
    label: 'Region highlights',
    withShowDailyPlansButton: true,
    spots: [
      {
        id: 1,
        img: {
          src: waterfallImg,
          alt: 'Gullfoss Waterfall',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Gullfoss Waterfall',
          subtitle: '1h',
          description: 'Waterfall',
        },
      },
      {
        id: 2,
        img: {
          src: riverImg,
          alt: 'Reykjadalur Valley',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Reykjadalur Valley',
          subtitle: '1h',
          description: 'Iconic hike, hot springs',
        },
      },
      {
        id: 3,
        img: {
          src: GeysirThermalFieldImg,
          alt: 'Geysir Thermal Field',
        },
        bar: {
          title: 'Geysir Thermal Field',
          subtitle: '1h',
          description: 'Geysers',
        },
      },
      {
        id: 4,
        img: {
          src: waterfallImg,
          alt: 'Gullfoss Waterfall',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Gullfoss Waterfall',
          subtitle: '1h',
          description: 'Waterfall',
        },
      },
      {
        id: 5,
        img: {
          src: riverImg,
          alt: 'Reykjadalur Valley',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Reykjadalur Valley',
          subtitle: '1h',
          description: 'Iconic hike, hot springs',
        },
      },
      {
        id: 6,
        img: {
          src: GeysirThermalFieldImg,
          alt: 'Geysir Thermal Field',
        },
        bar: {
          title: 'Geysir Thermal Field',
          subtitle: '1h',
          description: 'Geysers',
        },
      },
    ],
  },
  {
    label: 'Where to stay',
    withShowDailyPlansButton: false,
    spots: [
      {
        id: 7,
        img: {
          src: FrostAndFireHotelImg,
          alt: 'Frost and Fire Hotel',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Frost and Fire Hotel',
          subtitle: '$180+',
          rate: 9.1,
          description: 'Boutique hotel',
        },
      },
      {
        id: 8,
        img: {
          src: GreenHouseHotelImg,
          alt: 'The Greenhouse Hotel',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'The Greenhouse Hotel',
          subtitle: '$230+',
          rate: 9.1,
          description: 'Luxury hotel',
        },
      },
      {
        id: 9,
        img: {
          src: InniImg,
          alt: 'INNI',
        },
        bar: {
          title: 'INNI',
          subtitle: '$130+',
          rate: 9.1,
          description: 'Apart hotel',
        },
      },
      {
        id: 10,
        img: {
          src: FrostAndFireHotelImg,
          alt: 'Frost and Fire Hotel',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Frost and Fire Hotel',
          subtitle: '$180+',
          rate: 9.1,
          description: 'Boutique hotel',
        },
      },
      {
        id: 11,
        img: {
          src: GreenHouseHotelImg,
          alt: 'The Greenhouse Hotel',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'The Greenhouse Hotel',
          subtitle: '$230+',
          rate: 9.1,
          description: 'Luxury hotel',
        },
      },
      {
        id: 12,
        img: {
          src: InniImg,
          alt: 'INNI',
        },
        bar: {
          title: 'INNI',
          subtitle: '$130+',
          rate: 9.1,
          description: 'Apart hotel',
        },
      },
    ],
  },
];

export const highlightsForSouthAndHighlands: Highlight[] = [
  {
    label: 'South & Highlands',
    captions: ['Geysers', 'Waterfalls', 'Crater lakes'],
    withShowDailyPlansButton: false,
    description: `The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, 
        from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also 
        a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to 
        be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this 
        unique part of Iceland.`,
  },
  {
    label: 'Region highlights',
    withShowDailyPlansButton: true,
    spots: [
      {
        id: 13,
        img: {
          src: SkogafossWaterfallImg,
          alt: 'Skógafoss Waterfall',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Skógafoss Waterfall',
          subtitle: '1h',
          description: 'Iconic waterfall',
        },
      },
      {
        id: 14,
        img: {
          src: iceCaveImg,
          alt: 'Katla Ice Cave',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Katla Ice Cave',
          subtitle: '1h',
          description: 'Ice caves',
        },
      },
      {
        id: 15,
        img: {
          src: GeysirThermalFieldImg,
          alt: 'Fjaðrárgljúfur',
        },
        bar: {
          title: 'Fjaðrárgljúfur',
          subtitle: '1h',
          description: 'Geysers',
        },
      },
      {
        id: 16,
        img: {
          src: SkogafossWaterfallImg,
          alt: 'Skógafoss Waterfall',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Skógafoss Waterfall',
          subtitle: '1h',
          description: 'Iconic waterfall',
        },
      },
      {
        id: 17,
        img: {
          src: iceCaveImg,
          alt: 'Katla Ice Cave',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Katla Ice Cave',
          subtitle: '1h',
          description: 'Ice caves',
        },
      },
      {
        id: 18,
        img: {
          src: GeysirThermalFieldImg,
          alt: 'Fjaðrárgljúfur',
        },
        bar: {
          title: 'Fjaðrárgljúfur',
          subtitle: '1h',
          description: 'Geysers',
        },
      },
    ],
  },
  {
    label: 'Where to stay',
    withShowDailyPlansButton: false,
    spots: [
      {
        id: 19,
        img: {
          src: housesImg,
          alt: 'Magma Hotel',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Magma Hotel',
          subtitle: '$250+',
          rate: 9.1,
          description: 'Boutique hotel',
        },
      },
      {
        id: 20,
        img: {
          src: HotelVikiImg,
          alt: 'Hotel Vík í Mýrdal',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Hotel Vík í Mýrdal',
          subtitle: '$150+',
          rate: 9.1,
          description: 'Luxury hotel',
        },
      },
      {
        id: 21,
        img: {
          src: InniImg,
          alt: 'Hótel Kría',
        },
        bar: {
          title: 'Hótel Kría',
          subtitle: '$130+',
          rate: 9.1,
          description: 'Luxury hotel',
        },
      },
      {
        id: 22,
        img: {
          src: housesImg,
          alt: 'Magma Hotel',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Magma Hotel',
          subtitle: '$250+',
          rate: 9.1,
          description: 'Boutique hotel',
        },
      },
      {
        id: 23,
        img: {
          src: HotelVikiImg,
          alt: 'Hotel Vík í Mýrdal',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        bar: {
          title: 'Hotel Vík í Mýrdal',
          subtitle: '$150+',
          rate: 9.1,
          description: 'Luxury hotel',
        },
      },
      {
        id: 24,
        img: {
          src: InniImg,
          alt: 'Hótel Kría',
        },
        bar: {
          title: 'Hótel Kría',
          subtitle: '$130+',
          rate: 9.1,
          description: 'Luxury hotel',
        },
      },
    ],
  },
];

export const dailyPlanForGoldenCircleRegion: DailyPlan = {
  label: '2 days plan',
  withShowDailyPlansButton: true,
  plan: [
    {
      title: 'Activity 1',
      fullDuration: '40m',
      activities: [
        {
          img: waterfallImg,
          alt: 'waterfall',
          title: 'Gullfoss Waterfall',
          duration: '1h',
          occupation: 'Iconic hike',
          traffic: 'Light traffic',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        {
          img: riverImg,
          alt: 'river',
          title: 'Reykjadalur Valley',
          duration: '1h',
          occupation: 'Iconic hike',
          traffic: 'Light traffic',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
      ],
    },
    {
      title: 'Activity 2',
      fullDuration: '1h 40m',
      activities: [
        {
          img: GeysirThermalFieldImg,
          alt: 'Geysir',
          title: 'Geysir Thermal Field',
          duration: '1h',
          occupation: 'Iconic hike',
          traffic: 'Light traffic',
          button: {
            label: 'Curator’s pick',
            onClick: () => {},
          },
        },
        {
          img: ThingvellirImg,
          alt: 'Thingvellir',
          title: 'Thingvellir',
          duration: '1h',
          occupation: 'Iconic hike',
          traffic: 'Light traffic',
        },
      ],
    },
  ],
};
