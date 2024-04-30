import Link from "next/link";

export default function Page() {
  return (
    <div>
      posts:
      <ul className="text-3xl flex flex-col gap-64">
        <li>
          {" "}
          <Link href="/browse/1">Item 1</Link>
        </li>

        <li>
          <Link href="/browse/2">Item 2</Link>
        </li>

        <li>
          <Link href="/browse/3">Item 3 </Link>
        </li>
      </ul>
    </div>
  );
}
