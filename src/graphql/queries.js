/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKarte = /* GraphQL */ `
  query GetKarte($id: ID!) {
    getKarte(id: $id) {
      id
      Bild
      Edition
      Preis
      Anzahl
      Owner
      SpielerLink
      SpielerName
      KartenLink
      createdAt
      updatedAt
    }
  }
`;
export const listKartes = /* GraphQL */ `
  query ListKartes(
    $filter: ModelKarteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKartes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Bild
        Edition
        Preis
        Anzahl
        Owner
        SpielerLink
        SpielerName
        KartenLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
