import { type FC, useState } from 'react';
import { Button, Input } from 'twinkle-kit';
import { SuccessIcon } from '../ui/icons';

interface ContactFormData {
    firstName: string;
    email: string;
}

const usePostContact = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const postContact = async (contactBody: ContactFormData) => {
        setIsLoading(true);
        setIsSuccess(false);
        try {
            const res = await fetch('some-url', {
                method: 'POST',
                body: JSON.stringify(contactBody),
            });
            const responseData = await res.json();
            setData(responseData);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, isSuccess, postContact };
};

export const ContactForm: FC = () => {
    const { postContact, isLoading, isSuccess } = usePostContact();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('firstName', formData.get('firstName'));
        console.log('email', formData.get('email'));
        postContact({
            firstName: formData.get('firstName') as string,
            email: formData.get('email') as string,
        });
    };
    return (
        <form onSubmit={handleSubmit} className="relative">
            <label htmlFor='first-name'>First Name:</label>
            <Input name='firstName' inputId='first-name' />
            <label htmlFor='email'>Email:</label>
            <Input inputId='email' name='email' />
            <Button type='submit' isLoading={isLoading}>
                Submit
            </Button>
            {isSuccess && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-bounce">
                    <div className="animate-pulse">
                        <SuccessIcon size={48} className="drop-shadow-lg" />
                    </div>
                </div>
            )}
        </form>
    );
};
