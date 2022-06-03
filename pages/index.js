function Home(props) {
    const repos = props.repos;
    return (<>
        <h2>Meus repositorios</h2>
        {repos.map(r => {
            return (<p>{r.name}</p>);
        })}
    </>);
}
export async function getStaticProps() {
    const URL = 'https://api.github.com/users/cassioseffrin/repos';
    const res = await fetch(URL);
    let data = {};
    if (res.status == 200) {
        data = await res.json();
    } else {
        data = {};
    }
    return {
        props: {
            repos: data,
        },
        revalidate: 3600
    }
}
export default Home