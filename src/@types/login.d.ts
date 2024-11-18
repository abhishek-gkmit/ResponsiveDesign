interface LoginScreenProps {
  makeUserLogin: () => void;
}

interface LoginModalProps {
  hideModal: () => void;
  makeUserLogin: () => void;
}

interface LoginButtonsContainer {
  showModal: () => void;
}
