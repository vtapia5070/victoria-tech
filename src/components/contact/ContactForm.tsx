import { type FC, useState } from 'react';
import { Button, Input } from 'twinkle-kit';

interface ContactFormData {
    firstName: string;
    email: string;
}

const usePostContact = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const postContact = async (contactBody: ContactFormData) => {
        setIsLoading(true);
        try {
            const res = await fetch('some-url', {
                method: 'POST',
                body: JSON.stringify(contactBody),
            });
            const responseData = await res.json();
            setData(responseData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, postContact };
};

export const ContactForm: FC = () => {
    const { postContact, isLoading } = usePostContact();

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
        <form onSubmit={handleSubmit}>
            <label htmlFor='first-name'>First Name:</label>
            <Input name='firstName' />
            <Input inputId='email' name='email' />
            <Button type='submit' isLoading={isLoading}>
                Submit
            </Button>
        </form>
    );
};
