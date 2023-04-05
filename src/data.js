import fb from '../src/assets/images/icon-facebook.svg'
import tw from '../src/assets/images/icon-twitter.svg'
import instagram from '../src/assets/images/icon-instagram.svg'
import yt from '../src/assets/images/icon-youtube.svg'
import downArrow from '../src/assets/images/icon-down.svg'
import upArrow from '../src/assets/images/icon-up.svg'

export const data = [
  {
    social: [
      {
        id: 1,
        redName: "Facebook",
        user: '@nathanf',
        icon: fb,
        count: 1987,
        textCount: "F O L L O W E R S",
        estadistics: 12,
        iconStadistics: upArrow,
        color: '--Facebook'
      },
      {
        id: 2,
        redName: "Twitter",
        user: '@nathanf',
        icon: tw,
        count: 1044,
        textCount: "F O L L O W E R S",
        estadistics: 99,
        iconStadistics: upArrow,
        color: "--Twitter"
      },
      {
        id: 3,
        redName: "Instagram",
        user: '@realnathanf',
        icon: instagram,
        count: "11k",
        textCount: "F O L L O W E R S",
        estadistics: 1099,
        iconStadistics: upArrow,
        color: "--Instagram"
      },
      {
        id: 4,
        redName: "YouTube",
        user: 'Nathan F.',
        icon: yt,
        count: 8239,
        textCount: "S U S C R I B E R S",
        estadistics: 144,
        iconStadistics: downArrow,
        color: "--YouTube",
      }
    ],
    overview: [
      {
        id: 1,
        title: "Page views",
        number: 87,
        count: 3,
        icon: fb,
        arrowIcon: upArrow
      },
      {
        id: 2,
        title: "Likes",
        number: 52,
        count: 2,
        icon: fb,
        arrowIcon: downArrow
      },
      {
        id: 3,
        title: "Likes",
        number: 5462,
        count: 2257,
        icon: instagram,
        arrowIcon: upArrow
      },
      {
        id: 4,
        title: "Profile Views",
        number: '52K',
        count: 1375,
        icon: instagram,
        arrowIcon: upArrow
      },
      {
        id: 5,
        title: "Retweets",
        number: 117,
        count: 303,
        icon: tw,
        arrowIcon: upArrow
      },
      {
        id: 6,
        title: "Likes",
        number: 507,
        count: 553,
        icon: tw,
        arrowIcon: upArrow
      },
      {
        id: 7,
        title: "Likes",
        number: 107,
        count: 19,
        icon: yt,
        arrowIcon: downArrow
      },
      {
        id: 8,
        title: "Total views",
        number: 1407,
        count: 12,
        icon: yt,
        arrowIcon: upArrow
      },
    ],
  }


]