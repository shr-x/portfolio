import { HiOutlineGift } from 'react-icons/hi';
import { GiIndiaGate } from 'react-icons/gi';
import {
  FaChalkboardTeacher,
  FaPencilAlt,
  FaBook,
  FaRegSmileWink,
  FaRegKissBeam,
  FaRegFlushed,
  FaRegGrinHearts,
  FaRegGrinStars,
  FaRegSmileBeam,
} from 'react-icons/fa';
import { BsFillCloudRainFill } from 'react-icons/bs';

export const randomFacts = [
  {
    id: 1,
    title: 'Great things come from a small package.',
    desc: 'I am 18years, which equals 218 months or 6,649 days.',
    icon: <HiOutlineGift />,
    emoji: <FaRegKissBeam />,
  },
  {
    id: 2,
    title: 'Born in Bangalore, India.',
    desc: 'Growing in Bangalore means steping into it`s dynamic mix of old and new. You`d dive into the food, nightlife, and new problems',
    icon: <GiIndiaGate />,
    emoji: <FaRegSmileWink />,
  },
  {
    id: 3,
    title: 'Briefly worked on consciousness in Universe',
    desc: 'Contributing to the conceptual exploration of consciousness in AI and cosmology through the lens of panpsychism, fostering a deeper understanding of mind-matter relationships.',
    icon: <FaChalkboardTeacher />,
    emoji: <FaRegFlushed />,
  },
  {
    id: 4,
    title:
      "Love to write, Admire other people's stories, and enjoy the craft of shaping words.",
    desc: 'I have yet to find my personal writing style, but Jane Austen has been my inspiration.',
    icon: <FaPencilAlt />,
    emoji: <FaRegGrinHearts />,
  },
  {
    id: 5,
    title: "Find cloud gazing and puddles' reflections therapeutic.",
    desc: "Before the pandemic, I used to take lots of (fluffy) cloud photos. I also enjoy observing puddles' reflections on drizzling days. They are therapeutically fascinating!",
    icon: <BsFillCloudRainFill />,
    emoji: <FaRegGrinStars />,
  },

  {
    id: 6,
    title: '(Still) have a dream to write my own novel.',
    desc: 'Stories lose magic when expanded; my strict grammar/rhyme and plotting needs demand much time for a novel, But lately I found a plot (It`s Secret)',
    icon: <FaBook />,
    emoji: <FaRegSmileBeam />,
  },
];
