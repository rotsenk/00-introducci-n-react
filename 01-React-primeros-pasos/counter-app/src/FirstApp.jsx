import PropTypes from 'prop-types';

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

FirstApp.defaultProps = {
  title: 'No hay título.',
  subTitle: 'No hay subtitle',
  name: 'Nestor Rivas'
}
