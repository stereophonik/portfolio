import Link from "next/link";

export default function LinkComponent({ href, children }): React.ReactElement {
    return <Link href={href}>{children}</Link>
}