function MessageBox(props) {
  return (
    <div class={`alert ${props.variant || 'alert-info'}`} role="alert">
      {props.children}
    </div>
  );
}

export default MessageBox;
