import React from "react"
import { useParams } from "react-router-dom"
import "./All.css"
import pie from "./pie.png"
// import Button from "../Button/Button"

const All = () => {
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
      reactBased: true,
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
      reactBased: true,
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
      reactBased: true,
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
      reactBased: true,
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
      reactBased: false,
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
      reactBased: false,
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
      reactBased: false,
      jsBased: true,
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
      reactBased: false,
      jsBased: true,
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
      reactBased: false,
      jsBased: true,
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
      reactBased: false,
      jsBased: false,
      telegraph: true,
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
      reactBased: false,
      jsBased: true,
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
      reactBased: false,
      jsBased: false,
      html: true,
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
      reactBased: false,
      jsBased: true,
    },
  ]
  const handleFavourite = () => {
    return videos.filter((item) => {
      if (item.favourite === true) {
        item.favourite = false
      }
    })
  }
  // const { id } = useParams()
  return (
    <ul className='wrapper'>
      {videos.map((video, index) => {
        return (
          <li className='li' key={index}>
            <button className='favIcon' onClick={handleFavourite}>
              fav
            </button>
            <p className='name'>{video.name}</p>
            <p>{video.path}</p>
            <time className='time'>{video.time}</time>
          </li>
        )
      })}
    </ul>
  )
}

export default All
