import React from "react"
const videos = [
  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/Ul3y1LXxzdU'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    favourite: true,
  },
  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/SLfhMt5OUPI'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/SLfhMt5OUPI'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/JE3w48KeSZ8'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    favourite: true,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/LMagNcngvcU'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/E1MJALkgeGQ'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    language: "uzbek",
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/t2ypzz6gJm0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/Ke90Tje7VS0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/j942wKiXFu8'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/SLfhMt5OUPI'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/hQAHSlTtcmY'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/RkBfu-W7tt0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    favourite: true,
  },

  {
    name: "JavaScript",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/W6NZfCO5SIk'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "Javascript O'zbek tilida",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/QUMzEd8XCkI'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    language: "uzbek",
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/PFmuCDHHpwk'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    favourite: true,
    language: "uzbek",
  },

  {
    name: "Telegraph",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/ojYob1fiqPM'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/Qqx_wzMmFeA'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    favourite: true,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/cGgLHJGyS34'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
  },

  {
    name: "react",
    path: (
      <iframe
        width='450'
        height='315'
        src='https://www.youtube.com/embed/mJpkNRiTI-8'
        title='YouTube video player'
        //   frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
    ),
    time: `${Date()}`,
    favourite: true,
    language: "uzbek",
  },
]

const Uzbek = () => {
  const filtered = videos.filter((t) => {
    return (t.name = "Uzbek tilidagi darslar")
  })

  const uzbeks = filtered.filter((item) => {
    return item.language === "uzbek"
  })
  return (
    <ul className='wrapper'>
      {uzbeks.map((video, index) => {
        return (
          <li className='li' key={index}>
            <p className='name'>{video.name}</p>
            <p>{video.path}</p>
            <time className='time'>{video.time}</time>
          </li>
        )
      })}
    </ul>
  )
}

export default Uzbek
