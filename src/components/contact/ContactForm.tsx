import { useRef, type FC } from 'react';
import { Button } from 'twinkle-kit';

export const ContactForm: FC = () => {
    const inputRef = useRef(null);
    const handleSubmit = (formValues) => {
        console.log('submit', formValues);
        console.log('firstName', formValues.get('firstName'));
    };
    return (
        <form action={handleSubmit}>
            <label htmlFor='first-name'>First Name:</label>
            <input
                type='text'
                id='first-name'
                ref={inputRef}
                name='firstName'
            />
            <Button type='submit'>Submit</Button>
        </form>
    );
};
