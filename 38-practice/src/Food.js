// props 실습1

import PropTypes from 'prop-types';
import './Food.css';

const Food = (props)=>{
  console.log(props)
  const {food} = props;
  return(
    <>
    <h3 className ="food">
      제가 좋아하는 음식은 
      <b className='red'>{food}</b>입니다. 맛있기 때문이죠
    </h3>
    </>
  )
}

Food.defaultProps={
  food : "떡볶이"
}
Food.propTypes={
  food : PropTypes.string,
}

export default Food;