


function Home() {

    return (<div>Pagina Vercel 3</div>);
}


// export async function getStaticProps() {
//     const dataLinkTypes: LinkType[] = await linkApi.getAllLinkTypes('provin');
//     const dataBranchs: Branch[] = await linkApi.getAllBranches('provin');
//     let dataBranchsLV = [];
//     let linkTYpeLV = [];
//     dataBranchs.forEach(b => dataBranchsLV.push({ label: b.tradingName, value: b.id.toString() }));
//     dataLinkTypes.forEach(b => linkTYpeLV.push({ label: b.description, value: b.id.toString() }));
//     return {
//       props: {
//         branchs: dataBranchsLV,
//         linkTypes: linkTYpeLV
//       },
//       revalidate: 3600
//     }
//   }

export default Home