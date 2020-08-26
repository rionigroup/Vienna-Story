import React, { useState } from "react"
import PropTypes from "prop-types"
import Carousel from "react-material-ui-carousel"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
  photo: {
    width: "500px",
    height: "333px",
  },
}))

const CustomCarousel = props => {
  const { imgList } = props
  const maxIndex = imgList.length - 1
  const [slideIndex, setSlideIndex] = useState(0)
  const classes = useStyles()
  const Card = () => {
    if (slideIndex < 0 || slideIndex > maxIndex) return <></>
    return (
      <CardMedia
        className={classes.photo}
        image={imgList[slideIndex]}
        title="Paella dish"
      />
    )
  }

  const handleOnSlide = val => {
    let newIndex
    if (val === "next") {
      if (slideIndex >= maxIndex) {
        newIndex = 0
      } else {
        newIndex = slideIndex + 1
      }
    } else if (val === "prev") {
      if (slideIndex == 0) {
        newIndex = maxIndex
      } else {
        newIndex = slideIndex - 1
      }
    } else {
      throw new Error("error")
    }
    setSlideIndex(newIndex)
  }

  const renderCarousel = () => {
    if (imgList.length <= 1) {
      return <Card />
    } else {
      return (
        <Carousel
          className={classes.root}
          autoPlay={true}
          interval={3000}
          next={() => handleOnSlide("next")}
          prev={() => handleOnSlide("prev")}
        >
          <Card />
        </Carousel>
      )
    }
  }

  return renderCarousel()
}

CustomCarousel.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
}

CustomCarousel.default = {
  list: ["/image/noPic.png"],
}

export default CustomCarousel
