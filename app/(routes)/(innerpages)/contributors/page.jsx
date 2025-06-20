import ContributorCard from "@/_components/modules/contributorCard/ContributorCard";

function ContributorsPage(){
    const people = [
        {
          image: 'https://avatars.githubusercontent.com/u/12345678?v=4',
          name: 'Aayush "FL45h" Singh',
          role: 'Core Dev • GSAP/Three Wizard',
          socials: {
            github: 'https://github.com/FL45h-09',
            linkedin: 'https://linkedin.com/in/flashydev',
            twitter: 'https://twitter.com/flashybits',
          },
        },
        {
          image: 'https://placehold.co/100x100',
          name: 'Stella Nova',
          role: 'Shader Queen • FX Architect',
          socials: {
            github: 'https://github.com/stellanova',
          },
        },
      ];
    return(
        <div className="bg-gray-100 dark:bg-[#0a0a0a] py-10 px-4">
            <h1 className="mb-4">Contributors</h1>
            <ul className="reset flex flex-row flex-wrap gap-5 m-0 p-0">
                {people.map((person, i) => (
                    <li key={i}><ContributorCard {...person} /></li>
                ))}
            </ul>
            
        </div>
    )
}

export default ContributorsPage;