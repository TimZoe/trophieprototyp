/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKarte = /* GraphQL */ `
  mutation CreateKarte(
    $input: CreateKarteInput!
    $condition: ModelKarteConditionInput
  ) {
    createKarte(input: $input, condition: $condition) {
      id
      Bild
      Edition
      Preis
      Anzahl
      Owner
      SpielerLink
      SpielerName
      createdAt
      updatedAt
    }
  }
`;
export const updateKarte = /* GraphQL */ `
  mutation UpdateKarte(
    $input: UpdateKarteInput!
    $condition: ModelKarteConditionInput
  ) {
    updateKarte(input: $input, condition: $condition) {
      id
      Bild
      Edition
      Preis
      Anzahl
      Owner
      SpielerLink
      SpielerName
      createdAt
      updatedAt
    }
  }
`;
export const deleteKarte = /* GraphQL */ `
  mutation DeleteKarte(
    $input: DeleteKarteInput!
    $condition: ModelKarteConditionInput
  ) {
    deleteKarte(input: $input, condition: $condition) {
      id
      Bild
      Edition
      Preis
      Anzahl
      Owner
      SpielerLink
      SpielerName
      createdAt
      updatedAt
    }
  }
`;
