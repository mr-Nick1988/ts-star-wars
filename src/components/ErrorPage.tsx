interface ErrorPageProps {
    message: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
    return (
        <div className={'text-3xl text-center tracking-widest leading-loose'}>
            {message}
        </div>
    );
};

export default ErrorPage;










