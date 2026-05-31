export function EpcErrorCorrectionSection() {
  return (
    <section
      aria-labelledby="error-correction"
      className="mt-10"
      style={{ contentVisibility: 'auto', containIntrinsicHeight: 'auto 280px' }}
    >
      <h2 id="error-correction">Error Correction and QR Code Quality</h2>

      <h3>Error correction level M (15%)</h3>
      <p>
        QR codes support four error correction levels: L (7%), M (15%), Q (25%) and H (30%).
        The EPC standard specifies <strong>error correction level M</strong> for GiroCodes.
        This means up to 15% of the QR code&apos;s data cells can be damaged or covered
        while the code remains fully readable.
      </p>

      <h3>Impact on scannability</h3>
      <ul>
        <li><strong>Print quality:</strong> At least 300 DPI is recommended for printed codes</li>
        <li><strong>Minimum size:</strong> At least 2 × 2 cm for printed invoices; 200 × 200 px for digital</li>
        <li><strong>Quiet zone:</strong> White border of at least 4 modules on all sides</li>
        <li><strong>Contrast:</strong> Black modules on white background; avoid grey or coloured backgrounds</li>
        <li><strong>Undistorted:</strong> QR codes must not be stretched, rotated or skewed</li>
        <li><strong>Payload length:</strong> Shorter payloads produce less dense QR codes that scan more reliably</li>
      </ul>
    </section>
  );
}
