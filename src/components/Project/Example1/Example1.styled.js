import styled from 'styled-components';
import { connect } from 'react-redux';
import Example1 from './Example1';

const mapStateToProps = state => ({
  toggleColor: state.changeColorReducer.toggleColor,

});


export default connect(mapStateToProps)(styled(Example1).attrs({})`
    &.example1{
        transition: background-color .5s ease-in-out;
        background-color:${({ toggleColor }) => (toggleColor ? 'red' : 'blue')};
    }
`);
