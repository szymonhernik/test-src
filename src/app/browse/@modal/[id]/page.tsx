import { Suspense } from "react";
import { Modal } from "./modal";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <Suspense fallback={null}>
      <Modal>
        <p>article {id}</p>
      </Modal>
    </Suspense>
  );
}
