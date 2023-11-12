import Background from "@/components/Background";
import Link from "next/link";

const layoutStyles = {
    minHeight: 'calc(100vh - 1rem)',
    width: 'calc(100vw - 1rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
    zIndex: 2,
}
export const metadata = {
    title: 'Whoops, something went wrong.',
}
export default function Error() {
    return (<>
        <main style={layoutStyles}>
            <h1>404 - Page Not Found</h1>
            <Link href={'/'}>Return back to the main page</Link>
        </main>
        <Background />
    </>)
}
