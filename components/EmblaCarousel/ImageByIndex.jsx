import image1 from '../../public/banner1.png'
import image2 from '../../public/banner2.png'
import image3 from '../../public/banner3.png'

export const images = [image1, image2, image3]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
