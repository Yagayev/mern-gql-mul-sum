import gql from 'graphql-tag';

export function fetchValuesQuery(props){
    const {
        page,
        pagesize,
        sortby,
        order,
        firstvalmin,
        secondvalmin,
        summin,
        mulmin,
        firstvalmax,
        secondvalmax,
        summax,
        mulmax,
    } = props;

    let query = gql`
        query{
            getValues(getValuesInput: {
                page: ${page}
                pagesize: ${pagesize}
                ${sortby ? `sortby: ${sortby}` : "" }
                ${order ? `order: ${order}` : "" }
                ${firstvalmin ? `firstvalmin: ${firstvalmin}` : "" }
                ${secondvalmin ? `secondvalmin: ${secondvalmin}` : "" }
                ${summin ? `summin: ${summin}` : "" }
                ${mulmin ? `mulmin: ${mulmin}` : "" }
                ${firstvalmax ? `firstvalmax: ${firstvalmax}` : "" }
                ${secondvalmax ? `secondvalmax: ${secondvalmax}` : "" }
                ${summax ? `summax: ${summax}` : "" }
                ${mulmax ? `mulmax: ${mulmax}` : "" }
                }) {
                id
                firstval
                secondval
                sum
                mul
            }
        }
    `
    return query;
}