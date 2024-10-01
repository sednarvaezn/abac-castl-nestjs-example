import { AbilityBuilder, createMongoAbility } from '@casl/ability';

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
export type Subjects = 'User' | 'all';

// Función para definir las habilidades
export function defineAbilitiesFor(
  abilities: {
    action: string;
    subject: string;
    inverted?: boolean;
    conditions?: object;
  }[],
) {
  return createMongoAbility(abilities);
}
