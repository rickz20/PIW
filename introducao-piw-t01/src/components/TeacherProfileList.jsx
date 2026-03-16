import TeacherProfile from "./teacherprofile";

const TeacherProfileList = () => {

    const TeacherDataBase = [
        {name: "Diana Patrícia Medina Pereira", title: "Vice-coordenadora do curso de Design Digital", description: "É doutora em Artes Visuais pela Universidade de Brasília na linha Imagens, visualidades e urbanidades (2023). Mestra em Criação, Teoria e Mediação em Artes Plásticas – Université de Toulouse II – Le Mirail (França, 2014) e Licenciada em Artes Visuais pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará (2012). ", imgSrc: "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Diana-Medina-e1730202955582-250x300.jpeg"},
        {name: "Ingrid Teixeira Monteiro", title: "Professora adjunta", description: "É professora adjunta da Universidade Federal do Ceará, campus de Quixadá. Possui doutorado em Informática pela Pontifícia Universidade Católica do Rio de Janeiro (2015) e mestrado em Informática pela mesma instituição (2011), ambos na área de Interação Humano-Computador. Graduou-se em Comunicação Social – Publicidade e Propaganda pela Universidade Federal do Ceará (2006) ", imgSrc: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/ingrid-azulejo-300x300.jpeg"},
        {name: "Rochelle Silveira Lima", title: "Professora assistente", description: "Arquiteta e Urbanista formada pela Universidade de Fortaleza (UNIFOR, 2011–2016), com MBA em Arquitetura e Projeto Sustentável (2016–2018) e Mestre pela Universidade Federal do Ceará (2019–2021), no Programa de Pós-Graduação em Arquitetura, Urbanismo e Design. no Programa de Pós-Graduação em Arquitetura, Urbanismo e Design. no Programa de Pós-Graduação em Arquitetura ", imgSrc: "https://www.quixada.ufc.br/wp-content/uploads/2026/02/ROCHELLE-768x1024.jpg"}

    ]

    return(
        <> 
           {
            TeacherDataBase.map(
                (teacher) => <TeacherProfile
                name = {teacher.name}
                imgSrc = {teacher.imgSrc}
                description = {teacher.description}
                title = {teacher.title}

                />
            )
           } 
        </>
    )
}

export default TeacherProfileList;

