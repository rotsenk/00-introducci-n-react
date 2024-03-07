import PropTypes from 'prop-types';//define el tipo a las properties

const getResult = () => {
  return "Nestor Rivas";
} 

export const FirstApp = ({ title, subTitle }) => {

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

