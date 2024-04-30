export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal}
      {/* {props.modal} */}
      <div id="modal-root" />
    </div>
  );
}
