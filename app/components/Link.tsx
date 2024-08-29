import Link from "next/link";

export default function LinkComponent({ href, children }) {
    return <Link href={href}>{children}</Link>
}