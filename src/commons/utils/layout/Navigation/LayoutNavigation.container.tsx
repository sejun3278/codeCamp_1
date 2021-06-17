import LayoutNavigationUI from './LayoutNavigation.presenter';
import { useRouter } from 'next/router';

export default function LayoutNavigationPage({ moveUrl }) {
    const router = useRouter();

    return(
        <LayoutNavigationUI 
            router={router}
            moveUrl={moveUrl}
        />
    )
}