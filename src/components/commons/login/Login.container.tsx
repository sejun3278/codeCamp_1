import LoginLayoutUI from './Login.presenter';
import { useRouter } from 'next/router';

export default function LoginLayoutPage() {
    const router = useRouter();

    return(
        <LoginLayoutUI 
            router={router}
        />
    )
}