interface Project extends ProjectFromAPI {
    lastUpdatedString?: string;
}

interface ProjectFromAPI {
    title: string;
    img: string;
    description: string;
    languages: string;
    siteURL?: string;
    dateCreated: string;
    githubURL?: string;
    downloadURL?: string;
    lastUpdated?: Date;
}
