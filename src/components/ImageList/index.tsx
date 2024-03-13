import { Suspense, useState } from 'react';
import {
  ButtonWrapper,
  Image,
  ImageListWrapper,
  ImageWrapper,
  List,
} from '@/components/ImageList/index.styles';
import { Button } from '@/components/Button/index.styles';
import Car1 from '@/assets/images/jpg/car 1.jpg';
import Car2 from '@/assets/images/jpg/car 2.jpg';
import Car3 from '@/assets/images/jpg/car 3.jpg';

const imagesArr = [
  'https://images.wallpaperscraft.ru/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_1280x720.jpg',
  'https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_1280x720.jpg',
];
export function ImageList() {
  const mcLaren =
    'https://images.wallpaperscraft.ru/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_1280x720.jpg';
  const [images, setImages] = useState(imagesArr);
  const mappedImages = images.map((image) => (
    <Suspense fallback="Loading...">
      <ImageWrapper key="sdf5sd4f5sda4f">
        <Image src={image} loading="lazy" key={image} />
      </ImageWrapper>
    </Suspense>
  ));

  const handleClick = () => {
    setImages((prev) => [...prev, mcLaren]);
  };

  return (
    <ImageListWrapper>
      <Suspense fallback="Loading...">
        <List>{mappedImages}</List>
      </Suspense>
      <ButtonWrapper>
        <Button onClick={handleClick}>Load new image</Button>
      </ButtonWrapper>
    </ImageListWrapper>
  );
}
