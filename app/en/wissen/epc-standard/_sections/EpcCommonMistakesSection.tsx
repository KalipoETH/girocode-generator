export function EpcCommonMistakesSection() {
  return (
    <section
      aria-labelledby="common-mistakes"
      className="mt-10"
      style={{ contentVisibility: 'auto', containIntrinsicHeight: 'auto 480px' }}
    >
      <h2 id="common-mistakes">Common Mistakes with the EPC Standard</h2>

      <h3>Wrong character encoding</h3>
      <p>
        If the payload is encoded in a character set other than what is specified in line 3,
        special characters will be garbled. Always ensure that the encoding declared in
        line 3 matches the actual encoding used. For UTF-8 (value 1), ensure your string
        handling library encodes the payload as UTF-8 bytes.
      </p>

      <h3>Payment reference too long</h3>
      <p>
        The payment reference (line 11) has a strict maximum of <strong>140 characters</strong>.
        If you exceed this limit, the QR code may be rejected or the reference silently
        truncated. Always validate the reference length before encoding.
      </p>

      <h3>Wrong amount format</h3>
      <p>
        The amount must use a period (.) as the decimal separator, not a comma. Wrong:{' '}
        <code>EUR1.250,00</code>. Correct: <code>EUR1250.00</code> (period as decimal, no
        thousands separator). The amount must have exactly two decimal places.
      </p>

      <h3>Invalid IBAN</h3>
      <p>
        Using an IBAN that fails the Mod-97 check digit validation will cause banking apps
        to reject the payment. Always validate the IBAN before embedding it in a GiroCode.
      </p>

      <h3>Missing newlines between fields</h3>
      <p>
        The EPC payload uses Unix-style line breaks (<code>\n</code>, LF) to separate
        fields. Using Windows-style line breaks (<code>\r\n</code>, CRLF) or mixing line
        break styles will cause parsing errors in some banking apps.
      </p>

      <h3>Exceeding the maximum payload size</h3>
      <p>
        The total payload must not exceed <strong>331 bytes</strong> when encoded in UTF-8.
        Exceeding this limit may produce a QR code that is too dense to scan reliably at
        small sizes.
      </p>
    </section>
  );
}
