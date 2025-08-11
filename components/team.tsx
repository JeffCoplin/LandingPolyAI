const members = [
    {
        name: 'Cristal Hernandez de la Rosa',
        registration: '2023-0985',
        avatar: '/assets/account-avatar-profile-user-10-svgrepo-com.svg',
    },
    {
        name: 'Jeff Robinson Coplin Mancebo',
        registration: '2022-0810',
        avatar: '/assets/account-avatar-profile-user-7-svgrepo-com.svg',
    },
    {
        name: 'Kendry Aristy Diaz',
        registration: '2022-0090',
        avatar: '/assets/account-avatar-profile-user-14-svgrepo-com.svg',
    },
    {
        name: 'Héctor José Mendez Novas',
        registration: '2022-1008',
        avatar: '/assets/account-avatar-profile-user-svgrepo-com.svg',
    },
        {
        name: 'Yelis Nicole Payero Rosa',
        registration: '2023-0010',
        avatar: 'https://www.svgrepo.com/show/384684/account-avatar-profile-user-15.svg',
    },
            {
        name: 'Ragbert F. Polanco de Jesús',
        registration: '2022-0532',
        avatar: 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg',
    },
            {
        name: 'Johan Carlos Santana Laucer',
        registration: '2023-0196',
        avatar: 'https://www.svgrepo.com/show/384677/account-avatar-profile-user-12.svg',
    },
    


]

export default function TeamSection() {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Nuestro Equipo</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Equipo</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.registration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
