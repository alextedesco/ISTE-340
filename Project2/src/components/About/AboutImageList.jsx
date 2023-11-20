// Imports
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Images of Golisano exterior and interior
const images = [
  'https://www.rit.edu/computing/sites/rit.edu.computing/files/images/jumbotron/computing-departments-jumbotron.jpg',
  'https://s3.amazonaws.com/libapps/accounts/43307/images/golisano.jpg',
  'https://cdn.rit.edu/images/facility/DSC_0074.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjDOpLsKLDhTl_Sd77F31iPQ3Qc8YVHHD-w&usqp=CAU'
];


const AboutImageList = () => {
  return (
    // Horizontal grid of images
    <ImageList cols={images.length} rowHeight={160} gap={8} justifycontent="flex-start">
      {images.map((item, index) => (
        <ImageListItem key={index} style={{ overflow: 'hidden' }}>
          <img
            src={item}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default AboutImageList;
