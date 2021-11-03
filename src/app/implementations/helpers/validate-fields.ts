import { FieldValidator, ValidateNonEmptyFieldsResponseDto } from '../../data/protocols/utils/field-validator'

export class PersonalFieldValidator implements FieldValidator {
  validate (mandatoryFields: string[], fields: any): ValidateNonEmptyFieldsResponseDto {
    let isValid = true
    const missingFields = []
    for (const field of mandatoryFields) {
      if (!fields[field]) {
        isValid = false
        missingFields.push(field)
      }
    }

    return {
      success: isValid,
      missingFields
    }
  }
}
