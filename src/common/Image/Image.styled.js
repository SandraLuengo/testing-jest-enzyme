import styled from 'styled-components';
import Image from './Image';

export default styled(Image).attrs({})`
    max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}%`};
`;
