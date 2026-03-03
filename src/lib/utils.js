export function cx(...args) {
    return args.flat().filter(Boolean).join(' ');
}
