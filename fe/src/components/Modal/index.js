import PropTypes from 'prop-types';
import ReacDOM from 'react-dom';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return ReacDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Title</h1>
        <p>
          Body
        </p>

        <Footer>
          <button
            type="button"
            className="cancel-button"
          >
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
